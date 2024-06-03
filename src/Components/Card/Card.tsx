import React, { useState } from 'react';
import Modal from 'Components/Modal/Modal';
import { Book } from 'constants/bookInterface';
import mapData from 'utils/mapBookData';
import BookCard from 'constants/bookCard';
import 'Components/Card/card.css';

const Card = ({ book }: { book: Book[] }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState<Book | null>(null);

  return (
    <>
      {book.map((item, index) => (
        <BookCard
          key={index}
          item={mapData(item)}
          onClick={() => {
            setShow(true);
            setItem(item);
          }}
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
