import { Book } from '../constants/bookInterface';

const mapData = (item: Book) => {
  const {
    volumeInfo: {
      imageLinks: { smallThumbnail: thumbnail } = {},
      categories,
      previewLink,
      title,
      authors,
      description,
      subtitle,
    } = {},
  } = item;
  return {
    ...item,
    thumbnail,
    previewLink,
    title,
    authors,
    description,
    subtitle,
    categories,
  };
};

export default mapData;
