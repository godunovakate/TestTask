// hooks/useFilter.tsx
import { useState } from 'react';
import mapData from './mapBookData';
import { Book } from '../constants/bookInterface';

const useFilter = (bookData: Book[]) => {
  const [filtr, setFiltr] = useState('all');

  const mappedBookData = bookData.map(mapData);

  const categories = Array.from(new Set(mappedBookData.flatMap((book) => book.categories || [])));

  const handleCategoryClick = (category: string) => {
    setFiltr(category);
  };

  const filteredBooks =
    filtr === 'all'
      ? mappedBookData
      : mappedBookData.filter((book) => book.categories?.includes(filtr));

  return { filteredBooks, handleCategoryClick, categories };
};

export default useFilter;
