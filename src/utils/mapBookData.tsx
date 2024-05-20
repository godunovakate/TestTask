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
      publishedDate,
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
    publishedDate,
  };
};

export default mapData;
