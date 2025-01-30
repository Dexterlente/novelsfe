'use client'
import React, { useEffect, useState, useRef } from 'react';
import Select from 'react-select';
import { useFetchAllGenre } from '../hooks/useFetchAllGenre';
import { useRouter, usePathname } from 'next/navigation';
import { useFetchNovelsGenre } from '../hooks/useFetchNovelsGenre';
import { useFetchNovels } from '../hooks/useFetchNovels';
import Image from "next/image";
import { PaginationButton } from "./pagination";
import { useSearchParams } from "next/navigation";


const NoveList = () => {
  const { push } = useRouter();
  const pathname = usePathname(); // To get the current URL
  const { data } = useFetchAllGenre();

  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  // Initialize selectedGenre based on the URL or default to 'all'

  const initialGenre = pathname?.split('/').pop() || 'all';
  const [selectedGenre, setSelectedGenre] = useState({
    value: initialGenre,
    label: initialGenre === 'all' ? 'All Genres' : decodeURIComponent(initialGenre),
  });

  // Prepare genre options without modifying the genre encoding
  const genreOptions = data?.novels?.map((item: any) => ({
    value: item.genre, 
    label: decodeURIComponent(item.genre),
  })) || [];

// using let without re-triggering hooks unnecessarily
  let dataList
  let isLoadingList
  if (selectedGenre.label === "All Genres") {
    const { data: novelList, isLoading: isAllNovelsLoading } = useFetchNovels(page);
    dataList = novelList;
    isLoadingList = isAllNovelsLoading;
  } else {
    const { data: novelGenreList, isLoading: isGenreLoading } = useFetchNovelsGenre(selectedGenre.label, page);
    dataList = novelGenreList;
  isLoadingList = isGenreLoading;
  }

  console.log(dataList)
  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: 'white',
      borderColor: state.isFocused ? 'black' : '#ccc',
      boxShadow: state.isFocused ? '0 0 0 2px black' : 'none',
      '&:hover': { borderColor: 'black' },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'black' : 'white',
      color: state.isSelected ? 'white' : 'black',
      '&:hover': { backgroundColor: '#ddd', color: 'black' },
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: 'black',
    }),
    menu: (provided: any) => ({
      ...provided,
      border: '1px solid black',
    }),
  };

  useEffect(() => {
    if (selectedGenre.value !== 'all') {
      push(`/novels/genres/${selectedGenre.value}?page=${page}`);
    } else {
      push(`/novels/genres/all?page=${page}`);
    }
  }, [selectedGenre, push]);

    
  const displayLabel = selectedGenre.label.replace(/%20/g, ' ');
  const ImagePlaceholder = '/overgeared.jpg'
  const genreChanged = useRef(false);

  useEffect(() => {
    if (!genreChanged.current) {
      genreChanged.current = true;
      return;
    }
    push(`/novels/genres/${selectedGenre.value}?page=1`);
  }, [selectedGenre, push]);


  return (
    <div className='min-h-screen flex flex-col mt-10'>
      <Select
        options={[{ value: 'all', label: 'All Genres' }, ...genreOptions]}
        value={selectedGenre}
        onChange={(selectedOption) => {
          const newGenre = selectedOption as any;
          setSelectedGenre({
            value: newGenre.value,
            label: decodeURIComponent(newGenre.label),
          });
        }}
        isSearchable
        styles={customStyles} 
      />

      <p className="text-white text-center text-2xl my-6 font-bold">
        {selectedGenre.value === 'all' ? 'All Genres' : displayLabel}
      </p>
      <div className='block sm:hidden'>
      <div>
  {dataList?.novels?.map((novel: any) => (
    <div key={novel.novel_id} className="flex mb-10 h-[200px]">
      <div className="flex-shrink-0 mr-4">
        <Image
          src={ImagePlaceholder}
          alt={novel.title}
          width={150}
          height={240}
          className="rounded-lg hover:cursor-pointer"
        />
      </div>
      <div className="text-white flex-1">
        <div className="text-md font-bold mb-2 hover:underline hover:cursor-pointer">{novel.title}</div>
        <p className="text-[11px] hover:underline hover:cursor-pointer">{novel.synopsis || "No synopsis available"}</p>
      </div>
    </div>
  ))}
</div>

      </div>
      <div className='hidden sm:block'>
        <div className="grid grid-cols-2 gap-4">
          {dataList?.novels?.map((novel: any) => (
            <div key={novel.novel_id} className="grid grid-cols-2 gap-2">
              <div className='flex flex-row-reverse mr-2'>
                <Image
                  src={ImagePlaceholder}
                  alt={novel.title}
                  width={150}
                  height={240}
                  className="rounded-lg hover:cursor-pointer"
                />
              </div>
              <div className="text-white">
                <div className="text-md font-bold mb-2 hover:underline hover:cursor-pointer">
                  {novel.title}
                </div>
                <p className="text-[11px] hover:underline hover:cursor-pointer">
                  {novel.synopsis || "No synopsis available"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
                <div className='my-8'>
                <PaginationButton
                      currentPage={dataList?.current_page}
                      totalPages={dataList?.total_pages}
                      path={initialGenre}
                    />
                </div>
    </div>
  );
};

export default NoveList;
