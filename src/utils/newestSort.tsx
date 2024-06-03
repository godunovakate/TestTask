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
//?? оператор...
