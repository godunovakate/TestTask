import React, { useState } from 'react';
import 'components/Card/style.css';
import Modal from 'components/Modal/Modal';
import { Book } from 'constants/bookInterface';
import mapData from 'utils/mapBookData';
import BookCard from 'components/BookCard/BookCard';

const Card = ({ book }: { book: Book[] }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState<Book | null>(null);

  const handleClick = (item: Book) => {
    setShow(true);
    setItem(item);
  };

  return (
    <>
      {book.map((item, index) => (
        <BookCard
          key={index}
          item={mapData(item)}
          onClick={() => handleClick(item)}
        />
      ))}
      {bookItem && (
        <Modal
          show={show}
          item={mapData(bookItem)}
          onClose={() => setShow(false)}
        />
      )}
    </>
  );
};

export default Card;
