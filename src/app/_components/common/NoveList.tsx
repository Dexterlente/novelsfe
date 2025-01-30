'use client'
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useFetchAllGenre } from '../hooks/useFetchAllGenre';
import { useRouter, usePathname } from 'next/navigation';
import { useFetchNovelsGenre } from '../hooks/useFetchNovelsGenre';
import { useFetchNovels } from '../hooks/useFetchNovels';
import Image from "next/image";

const NoveList = () => {
  const { push } = useRouter();
  const pathname = usePathname(); // To get the current URL
  const { data } = useFetchAllGenre();


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
    const { data: novelList, isLoading: isAllNovelsLoading } = useFetchNovels(1);
    dataList = novelList;
    isLoadingList = isAllNovelsLoading;
  } else {
    const { data: novelGenreList, isLoading: isGenreLoading } = useFetchNovelsGenre(selectedGenre.label, 1);
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
      push(`/novels/genres/${selectedGenre.value}`);
    } else {
      push('/novels/genres/all');
    }
  }, [selectedGenre, push]);

    
  const displayLabel = selectedGenre.label.replace(/%20/g, ' ');
  const ImagePlaceholder = '/overgeared.jpg'


  return (
    <div className='min-h-screen flex flex-col mt-3 '>
      <Select
        options={[{ value: 'all', label: 'All Genres' }, ...genreOptions]}
        value={selectedGenre}
        onChange={(selectedOption) => {
          const newGenre = selectedOption as any;
          setSelectedGenre({
            value: newGenre.value,
            label: decodeURIComponent(newGenre.label),  // Decode the label for display
          });
        }}
        isSearchable
        styles={customStyles} 
      />

      <p className="text-white text-center text-2xl m-3 font-bold">
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
      <div className="grid grid-cols-2 gap-4 align-center items-center">
        <div className="left-grid">
          {dataList?.novels?.slice(0, 5).map((novel: any) => (
            <div key={novel.novel_id} className="grid grid-cols-2 mb-10 h-[200px]">
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
                <div className="text-md font-bold mb-2 hover:underline hover:cursor-pointer">{novel.title}</div>
                <p className="text-[11px] hover:underline hover:cursor-pointer">{novel.synopsis || "No synopsis available"}</p>
              </div>
            </div>
          ))}
        </div>

          <div className="right-grid">
              {dataList?.novels?.slice(5, 10).map((novel: any) => (
                <div key={novel.novel_id} className="grid grid-cols-2 mb-10 h-[200px]">
                  <div className='flex flex-row-reverse mr-3 hover:cursor-pointer'>
                    <Image
                      src={ImagePlaceholder}
                      alt={novel.title}
                      width={150}
                      height={240}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="text-white">
                    <div className="text-md font-bold mb-2 hover:underline hover:cursor-pointer">{novel.title}</div>
                    <p className="text-[11px] hover:underline hover:cursor-pointer">{novel.synopsis || "No synopsis available"}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
};

export default NoveList;
