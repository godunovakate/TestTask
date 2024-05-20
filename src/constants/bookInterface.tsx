export interface Book {
  id: string;
  etag: string;
  selfLink: string;
  thumbnail?: string;
  previewLink?: string;
  title?: string;
  authors?: string[];
  description?: string;
  subtitle?: string;
  publishedDate?: string;
  categories?: string[];
  volumeInfo: {
    title: string;
    subtitle?: string;
    authors?: string[];
    publishedDate?: string;
    description?: string;
    categories?: string[];
    imageLinks?: {
      smallThumbnail?: string;
      thumbnail?: string;
    };
    previewLink?: string;
    infoLink?: string;
  };
}
