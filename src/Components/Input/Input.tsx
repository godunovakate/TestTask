import React, {
  useState,
  ChangeEvent,
  KeyboardEvent,
  useCallback,
} from 'react';
import debounce from 'debounce';
import 'components/Input/style.css';
import { SearchInputProps } from './types';
import SearchField from 'components/SearchField/Search';

const SearchInput: React.FC<SearchInputProps> = ({ clearApp, onSubmit }) => {
  const [input, setInput] = useState('');

  const debouncedOnSubmit = useCallback(
    debounce((nextValue: string) => onSubmit(nextValue), 300),
    [],
  );

  const handleUserInput = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const value = e.currentTarget.value;
    setInput(value);
    debouncedOnSubmit(value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      onSubmit(input);
    }
  };

  return (
    <>
      <SearchField
        input={input}
        handleUserInput={handleUserInput}
        handleKeyPress={handleKeyPress}
      />
      <button
        className="query-btn"
        type="button"
        onClick={() => onSubmit(input)}
      >
        Search
      </button>
    </>
  );
};

export default SearchInput;
