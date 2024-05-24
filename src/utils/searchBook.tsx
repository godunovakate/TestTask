import React from 'react';
import axios from 'axios';
import { Book } from 'constants/bookInterface';
import mapData from './mapBookData';

const searchBook = (
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  setData: React.Dispatch<React.SetStateAction<Book[]>>,
) => {
  axios
    .get(`${process.env.REACT_APP_GOOGLE_BOOKS_API_URL}?q=${search}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}&maxResults=40`)
    .then(({ data: { items } }) => {
      const mappedData = items.map(mapData);
      setData(mappedData);
    })
    .catch((err) => console.log(err));
};

export default searchBook;
