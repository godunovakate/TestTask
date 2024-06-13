import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'components/Main/style.css';
import Card from 'components/Card/Card';
import { Book } from 'constants/bookInterface';
import useFilter from 'hooks/useFilter';
import sortBooks from 'utils/newestSort';
import SearchInput from 'components/Input/Input';
import SearchBook from 'api/SearchBook';
import SortSelect from 'components/Sort/Sort';
import CategorySelect from 'components/CategoryFilter/Filter';

const Main = () => {
  const [search, setSearch] = useState('');
  const [bookData, setData] = useState<Book[]>([]);
  const [isSorted, setIsSorted] = useState(false);

  const { filteredBooks, handleCategoryClick, categories } =
    useFilter(bookData);
  const [theme, setTheme] = useState('light');
  const [totalBooks, setTotalBooks] = useState(0);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const displayedBooks = isSorted ? sortBooks(filteredBooks) : filteredBooks;

  const clearApp = () => {
    setData([]);
    setTotalBooks(0);
  };

  const onSubmit = (input: string) => {
    setSearch(input);
  };

  const dataBooks = useSelector((state: any) => state.dataReducer.data);

  return (
    <>
      <SearchBook
        search={search}
        setData={setData}
        setTotalBooks={setTotalBooks}
      />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        CHANGE THEME
      </button>
      <div className="header">
        <div className="row1"></div>
        <div className="row2">
          <h2>Search your book</h2>
          <SearchInput clearApp={clearApp} onSubmit={onSubmit} />
          <SortSelect setIsSorted={setIsSorted} />
          <CategorySelect
            handleCategoryClick={handleCategoryClick}
            categories={categories}
          />
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
