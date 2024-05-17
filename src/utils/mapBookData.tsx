// utils/mapBooksData.js
import { Book } from '../constants/bookInterface';

const mapData = (item: Book) => {
  const { volumeInfo: { imageLinks: { smallThumbnail: thumbnail } = {}, categories } = {} } = item;
  return {
    ...item,
    thumbnail,
    categories,
  };
};

export default mapData;
