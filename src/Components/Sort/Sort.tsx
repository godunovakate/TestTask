import React from 'react';
import 'components/Sort/style.css';
import { SortSelectProps } from './types';

const SortSelect: React.FC<SortSelectProps> = ({ setIsSorted }) => {
  return (
    <div className="sort">
      filter on
      <select onChange={(e) => setIsSorted(e.target.value === 'newest')}>
        <option value="relative">relative</option>
        <option value="newest">newest</option>
      </select>
    </div>
  );
};

export default SortSelect;
