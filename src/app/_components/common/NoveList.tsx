'use client';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useFetchAllGenre } from '../hooks/useFetchAllGenre';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useFetchNovelsGenre } from '../hooks/useFetchNovelsGenre';
import { useFetchNovels } from '../hooks/useFetchNovels';
import Loader from './loader';
import List from './List';
import ArrowButton from '../utils/arrowbutton';

const NoveList = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Get the current page or default to "1"
  const page = searchParams.get("page") || "1";

  const { data } = useFetchAllGenre();
  const initialGenre = pathname?.split('/').pop() || 'all';
  
  const [selectedGenre, setSelectedGenre] = useState({
    value: initialGenre,
    label: initialGenre === 'all' ? 'All Genres' : decodeURIComponent(initialGenre),
  });

  const genreOptions = data?.novels?.map((item: any) => ({
    value: item.genre, 
    label: decodeURIComponent(item.genre),
  })) || [];

  const isAllGenres = selectedGenre.value === "all";
  const { data: dataList, isLoading: isLoadingList } = isAllGenres 
    ? useFetchNovels(page) 
    : useFetchNovelsGenre(selectedGenre.value, page);

  useEffect(() => {
    if (selectedGenre.value !== pathname.split('/').pop()) {
      // When the genre changes, reset to page 1
      push(`/novels/genres/${selectedGenre.value}?page=1`);
    }
  }, [selectedGenre, push, pathname]);

  return (
    <div className='min-h-screen flex flex-col mt-10'>
      <Select
        classNamePrefix="select"
        options={[{ value: 'all', label: 'All Genres' }, ...genreOptions]}
        value={selectedGenre}
        onChange={(selectedOption) => {
          setSelectedGenre({
            value: selectedOption?.value || "all",
            label: decodeURIComponent(selectedOption?.label || "All Genres"),
          });
        }}
        isSearchable
      />

      <p className="text-white text-center text-2xl my-6 font-bold">
        {selectedGenre.value === 'all' ? 'All Genres' : selectedGenre.label.replace(/%20/g, ' ')}
      </p>

      {isLoadingList ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        <List data={dataList} path={initialGenre} />
      )}
      <ArrowButton />
    </div>
  );
};

export default NoveList;
