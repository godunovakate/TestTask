import { Book } from './bookInterface';

export interface ModalProps {
  show: boolean;
  item: Book;
  onClose: () => void;
}
