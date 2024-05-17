import React from 'react';
import axios from 'axios';
import { Book } from '../constants/bookInterface';
import { GOOGLE_BOOKS_API_KEY, GOOGLE_BOOKS_API_URL } from '../constants/api';
import mapData from './mapBookData';

const searchBook = (
  evt: React.KeyboardEvent<HTMLInputElement>,
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  setData: React.Dispatch<React.SetStateAction<Book[]>>,
) => {
  if (evt.key === 'Enter') {
    const target = evt.target as HTMLInputElement; // Уточнение типа для доступа к свойству value
    axios
      .get(`${GOOGLE_BOOKS_API_URL}?q=${target.value}&key=${GOOGLE_BOOKS_API_KEY}&maxResults=40`)
      .then(({ data: { items } }) => {
        const mappedData = items.map(mapData);
        setData(mappedData);
      })
      .catch((err) => console.log(err));
  }
};

export default searchBook;
