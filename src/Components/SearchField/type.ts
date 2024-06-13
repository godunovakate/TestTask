import { ChangeEvent, KeyboardEvent } from 'react';

export interface SearchFieldProps {
  input: string;
  handleUserInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
}
