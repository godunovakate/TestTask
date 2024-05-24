import React from 'react';
import axios from 'axios';
import { Book } from 'constants/bookInterface';
import { GOOGLE_BOOKS_API_KEY, GOOGLE_BOOKS_API_URL } from 'constants/api';
import mapData from './mapBookData';

// Функция searchBook теперь принимает строку поиска в качестве аргумента
const searchBook = (
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  setData: React.Dispatch<React.SetStateAction<Book[]>>,
) => {
  axios
    .get(`${GOOGLE_BOOKS_API_URL}?q=${search}&key=${GOOGLE_BOOKS_API_KEY}&maxResults=40`)
    .then(({ data: { items } }) => {
      const mappedData = items.map(mapData);
      setData(mappedData);
    })
    .catch((err) => console.log(err));
};

export default searchBook;
