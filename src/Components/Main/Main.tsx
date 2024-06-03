import React, { useState, useEffect } from 'react';
import Card from 'Components/Card/Card';
import searchBook from 'utils/searchBook';
import { Book } from 'constants/bookInterface';
import useFilter from 'hooks/categoriesFilter';
import sortBooks from 'utils/newestSort';
import Input from 'Components/Input/Input';
import 'Components/Main/main.css';

const Main = () => {
  const [search, setSearch] = useState('');
  const [bookData, setData] = useState<Book[]>([]);
  const [isSorted, setIsSorted] = useState(false);
  const { filteredBooks, handleCategoryClick, categories } =
    useFilter(bookData);
  const [theme, setTheme] = useState('light');
  const [totalBooks, setTotalBooks] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const displayedBooks = isSorted ? sortBooks(filteredBooks) : filteredBooks;

  const clearApp = () => {
    setData([]);
    setTotalBooks(0);
  };

  const onSubmit = (input: string) => {
    searchBook(input, setSearch, setData, setTotalBooks, setError);
  };

  return (
    <>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        CHANGE THEME
      </button>
      <div className="header">
        <div className="row1"></div>
        <div className="row2">
          <h2>Search your book</h2>
          <Input clearApp={clearApp} onSubmit={onSubmit} />
          <div className="sort">
            {' '}
            filter on
            <select onChange={(e) => setIsSorted(e.target.value === 'newest')}>
              <option value="relative">relative</option>
              <option value="newest">newest</option>
            </select>
          </div>

          <div className="butt">
            {' '}
            Sort on
            <select onChange={(e) => handleCategoryClick(e.target.value)}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          {totalBooks > 0 && <p>Found {totalBooks} books</p>}
        </div>
      </div>
      <div className="container">
        {displayedBooks.length > 0 && <Card book={displayedBooks} />}
      </div>
    </>
  );
};

export default Main;
