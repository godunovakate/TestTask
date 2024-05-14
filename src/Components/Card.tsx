import React, { useState } from "react";
import Modal from "./Modal";

interface Book {
  id: string;
  thumbnail?: string;
  volumeInfo: {
    title: string;
  };
}

const Card = ({ book }: { book: Book[] }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState<Book | null>(null);

  return (
    <>
      {book.map((item) => (
        <div className="card" onClick={() => {setShow(true); setItem(item);}}>
          <img src={item.thumbnail} alt={item.volumeInfo.title} />
          <div className="bottom">
            <h3 className="title">{item.volumeInfo.title}</h3>
            
            {/* Здесь можно добавить логику для отображения цены или другой информации */}
          </div>
        </div>
      ))}
      {bookItem && <Modal show={show} item={bookItem} onClose={() => setShow(false)} />}
    </>
  );
};

export default Card;
