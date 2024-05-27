import { useState } from 'react';
import mapData from '../utils/mapBookData';
import { Book } from 'constants/bookInterface';

const useFilter = (bookData: Book[]) => {
  const [filter, setFilter] = useState('all');

  const mappedBookData = bookData.map(mapData);

  const categories = Array.from(new Set(mappedBookData.flatMap((book) => book.categories || [])));

  const handleCategoryClick = (category: string) => {
    setFilter(category);
  };

  const filteredBooks =
    filter === 'all'
      ? mappedBookData
      : mappedBookData.filter((book) => book.categories?.includes(filter));

  return { filteredBooks, handleCategoryClick, categories };
};

export default useFilter;
