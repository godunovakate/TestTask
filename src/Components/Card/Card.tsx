import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { Book } from '../../constants/bookInterface';
import mapData from '../../utils/mapBookData';
import BookCard from '../../constants/bookCard';

const Card = ({ book }: { book: Book[] }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState<Book | null>(null);

  return (
    <>
      {book.map((item) => (
        <BookCard
          item={mapData(item)}
          onClick={() => {
            setShow(true);
            setItem(item);
          }}
        />
      ))}
      {bookItem && <Modal show={show} item={mapData(bookItem)} onClose={() => setShow(false)} />}
    </>
  );
};

export default Card;
