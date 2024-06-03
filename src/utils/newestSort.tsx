import { Book } from 'constants/bookInterface';

const sortBooks = (books: Book[]): Book[] => {
  return [...books].sort((a, b) => {
    return (
      new Date(b.publishedDate || '').getTime() -
      new Date(a.publishedDate || '').getTime()
    );
  });
};

export default sortBooks;

/* 
const dateA = a.publishedDate ? new Date(a.publishedDate).getTime() : 0;
const dateB = b.publishedDate ? new Date(b.publishedDate).getTime() : 0;
return dateB - dateA;
     */
