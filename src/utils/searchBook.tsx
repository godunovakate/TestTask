import React from 'react';
import axios from 'axios';
import { Book } from 'constants/bookInterface';
import mapData from './mapBookData';

const searchBook = (
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  setData: React.Dispatch<React.SetStateAction<Book[]>>,
  setCount: React.Dispatch<React.SetStateAction<number>>,
  startIndex: number,
) => {
  axios
    .get(
      `${process.env.REACT_APP_GOOGLE_BOOKS_API_URL}?q=${search}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}&maxResults=30&startIndex=${startIndex}`,
    )
    .then(({ data: { items } }) => {
      const mappedData = items.map(mapData);
      setData((prevBooks) => [...prevBooks, ...mappedData]);
      setCount((prevCount) => prevCount + items.length);
    })
    .catch((err) => console.log(err));
};

export default searchBook;
