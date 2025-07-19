import React from 'react';
import './FilterPanel.css';

const FilterPanel = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
  'All',
  'Photography',
  'Printing',
  'Makeup',
  'Fashion',
  'Tech',
  'Crafts',
  'Food',
  'Hair',
  'Tutoring',
  'Design',
  'Laundry'
];
  return (
    <div className="filter-panel">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
          onClick={() => setSelectedCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterPanel;
