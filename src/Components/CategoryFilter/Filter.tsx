import React from 'react';
import 'components/CategoryFilter/style.css';
import { CategorySelectProps } from './types';

const CategorySelect: React.FC<CategorySelectProps> = ({
  handleCategoryClick,
  categories,
}) => {
  return (
    <div className="butt">
      Sort on
      <select onChange={(e) => handleCategoryClick(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelect;
