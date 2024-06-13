import { useState, useEffect } from 'react';
import mapData from '../utils/mapBookData';
import { Book } from 'constants/bookInterface';

const useFilter = (bookData: Book[]) => {
  const [filter, setFilter] = useState('all');
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [categories, setCategories] = useState<string[]>([
    'all',
    'Art',
    'Biography',
    'Computers',
    'History',
    'Medical',
    'Poetry',
  ]);

  const handleCategoryClick = (category: string) => {
    setFilter(category);
  };

  useEffect(() => {
    const mappedBookData = bookData.map(mapData);

    setFilteredBooks(
      filter === 'all'
        ? mappedBookData
        : mappedBookData.filter((book) => book.categories?.includes(filter)),
    );
  }, [filter, bookData]);

  return { filteredBooks, handleCategoryClick, categories };
};

export default useFilter;
