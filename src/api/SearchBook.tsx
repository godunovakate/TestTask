import React, { useEffect, Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { SET_ERROR } from 'store/actions/actions';
import mapData from '../utils/mapBookData';
import { Book } from 'constants/bookInterface';

interface Props {
  search: string;
  setData: React.Dispatch<React.SetStateAction<Book[]>>;
  setTotalBooks: Dispatch<SetStateAction<number>>;
}

const SearchBook: React.FC<Props> = ({ search, setData, setTotalBooks }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (search) {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}&maxResults=30`,
        )
        .then(({ data: { items, totalItems } }) => {
          if (items) {
            const mappedData = items.map(mapData);
            setData(mappedData);
            setTotalBooks(totalItems);
            console.log(items);
          } else {
            console.log('No books found');
            dispatch(SET_ERROR('An error occurred while fetching books'));
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch(SET_ERROR('An error occurred while fetching books'));
        });
    }
  }, [search, dispatch, setData, setTotalBooks]);

  return null; // Ничего не рендерим
};

export default SearchBook;
