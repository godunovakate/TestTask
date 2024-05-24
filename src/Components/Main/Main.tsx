import React, { useState, useEffect } from 'react';
import Card from 'Components/Card/Card';
import searchBook from 'utils/searchBook';
import { Book } from 'constants/bookInterface';
import useFilter from 'hooks/categoriesFiltr';
import sortBooks from 'utils/newestSort';

const Main = () => {
  const [search, setSearch] = useState('');
  const [bookData, setData] = useState<Book[]>([]);
  const [isSorted, setIsSorted] = useState(false);
  const { filteredBooks, handleCategoryClick, categories } = useFilter(bookData);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const displayedBooks = isSorted ? sortBooks(filteredBooks) : filteredBooks;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchBook(search, setSearch, setData);
    }
  };

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            Google
            <br /> API.
          </h1>
        </div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>CHANGE THEME</button>
        <div className="row2">
          <h2>Search your book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="sort">
            <button onClick={() => setIsSorted(!isSorted)}>
              {isSorted ? 'relative' : 'newest'}
            </button>
          </div>
          <div className="butt">
            {categories.map((category) => (
              <button key={category} onClick={() => handleCategoryClick(category)}>
                <i className={category}> {category} </i>
              </button>
            ))}
          </div>
          <img src="./images/bg2.png" alt="" />
        </div>
      </div>
      <div className="container">{displayedBooks.length > 0 && <Card book={displayedBooks} />}</div>
    </>
  );
};

export default Main;
