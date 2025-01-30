'use client'
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useFetchAllGenre } from '../hooks/useFetchAllGenre';
import { useRouter, usePathname } from 'next/navigation'; // Import usePathname to access current URL

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

  // Custom styles
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


  return (
    <div className='min-h-screen flex flex-col mt-3'>
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
        styles={customStyles} // Apply custom styles
      />

      <p className="text-white text-center text-2xl m-3 font-bold">
        {selectedGenre.value === 'all' ? 'All Genres' : displayLabel}
      </p>
    </div>
  );
};

export default NoveList;
