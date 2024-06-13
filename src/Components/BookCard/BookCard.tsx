import { Book } from '../../constants/bookInterface';
import mapData from 'utils/mapBookData';

const BookCard = ({ item, onClick }: { item: Book; onClick: () => void }) => {
  const {
    thumbnail,
    volumeInfo: { title },
    categories,
    authors,
  } = mapData(item);
  return (
    <div className="card" onClick={onClick}>
      <img src={thumbnail} alt={title} />
      <div className="bottom">
        <h3 className="title">{title}</h3>
        <h4> {authors} </h4>
        {categories && <p className="categories">{categories.join(', ')}</p>}
      </div>
    </div>
  );
};

export default BookCard;
