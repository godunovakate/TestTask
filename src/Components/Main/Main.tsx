import React, { useState } from 'react';
import Card from '../Card/Card';
import searchBook from './searchBook';
import { Book } from './types';

const Main = () => {
  const [search, setSearch] = useState('');
  const [bookData, setData] = useState<Book[]>([]); // Обновленный тип данных
  const [filtr, setFiltr] = useState('all');

  const handleCategoryClick = (categories: string) => {
    setFiltr(categories);
  };

  const filteredBooks =
    filtr === 'all'
      ? bookData
      : bookData.filter((book) => book.volumeInfo.categories?.includes(filtr));

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            Книга - это мечта,
            <br /> которую вы держите в руках.
          </h1>
        </div>
        <div className="row2">
          <h2>Найди свою книгу</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => searchBook(e, setSearch, setData)}
            />

            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="butt">
            <button onClick={() => handleCategoryClick('all')}>
              <i className="all"> all </i>
            </button>
            <button onClick={() => handleCategoryClick('Art')}>
              <i className="art"> art </i>
            </button>
            <button onClick={() => handleCategoryClick('Biography')}>
              <i className="biography"> biography </i>
            </button>
            <button onClick={() => handleCategoryClick('Computers')}>
              <i className="computers"> computers </i>
            </button>
            <button onClick={() => handleCategoryClick('History')}>
              <i className="history"> history </i>
            </button>
            <button onClick={() => handleCategoryClick('Medical')}>
              <i className="medical"> medical </i>
            </button>
            <button onClick={() => handleCategoryClick('Poetry')}>
              <i className="poetry"> poetry </i>
            </button>
          </div>
          <img src="./images/bg2.png" alt="" />
        </div>
      </div>

      <div className="container">{filteredBooks.length > 0 && <Card book={filteredBooks} />}</div>
    </>
  );
};

export default Main;
