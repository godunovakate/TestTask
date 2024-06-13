import React from 'react';
import { SearchFieldProps } from './type';
import 'components/SearchField/style.css';

const SearchField: React.FC<SearchFieldProps> = ({
  input,
  handleUserInput,
  handleKeyPress,
}) => {
  return (
    <input
      id="query-input"
      type="search"
      name="input"
      value={input}
      placeholder="Search by book title or author..."
      onChange={handleUserInput}
      onKeyUp={handleKeyPress}
    />
  );
};

export default SearchField;
