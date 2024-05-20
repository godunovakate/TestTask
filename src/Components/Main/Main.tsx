import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import searchBook from '../../utils/searchBook';
import { Book } from '../../constants/bookInterface';
import useFilter from '../../utils/categoriesFiltr';
import sortBooks from '../../utils/newestSort';

const Main = () => {
  const [search, setSearch] = useState('');
  const [bookData, setData] = useState<Book[]>([]);
  const [isSorted, setIsSorted] = useState(false); // Добавлено состояние для сортировки
  const { filteredBooks, handleCategoryClick, categories } = useFilter(bookData);

  // Сортировка книг по дате добавления, если включена сортировка
  const displayedBooks = isSorted ? sortBooks(filteredBooks) : filteredBooks;
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
      <div className="container">{displayedBooks.length > 0 && <Card book={displayedBooks} />}</div>{' '}
    </>
  );
};

export default Main;
