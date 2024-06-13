import { Book } from "constants/bookInterface";

export interface ModalProps {
  show: boolean;
  item: Book;
  onClose: () => void;
}
