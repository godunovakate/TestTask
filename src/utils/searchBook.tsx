import React from 'react';
import axios from 'axios';
import { Book } from 'constants/bookInterface';
import mapData from './mapBookData';

const searchBook = (
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  setData: React.Dispatch<React.SetStateAction<Book[]>>,
  setTotalBooks: React.Dispatch<React.SetStateAction<number>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>,
) => {
  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}&maxResults=30`,
    )
    .then(({ data: { items, totalItems } }) => {
      if (items) {
        const mappedData = items.map(mapData);
        setData(mappedData);
        setTotalBooks(totalItems);
      } else {
        console.log('No books found');
      }
    })
    .catch((err) => {
      console.log(err);
      setError('An error occurred while fetching books');
    });
};

export default searchBook;
