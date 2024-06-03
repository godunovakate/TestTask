import sortBooks from 'utils/newestSort';
import { Book } from 'constants/bookInterface';

export const getDisplayedBooks = (isSorted: boolean, filteredBooks: Book[]) => {
  return isSorted ? sortBooks(filteredBooks) : filteredBooks;
};
