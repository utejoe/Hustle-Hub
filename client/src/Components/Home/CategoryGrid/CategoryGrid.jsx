import React from 'react';
import './CategoryGrid.css';

const categories = [
  { icon: '📸', label: 'Photography' },
  { icon: '💄', label: 'Makeup' },
  { icon: '🖨️', label: 'Printing' },
  { icon: '👨‍🏫', label: 'Tutoring' },
  { icon: '🍲', label: 'Catering' },
  { icon: '🧵', label: 'Fashion' },
  { icon: '🧺', label: 'Laundering' },
  { icon: '✂️', label: 'Barbing' },
  { icon: '💇‍♀️', label: 'Hairdressing' },
  { icon: '💡', label: 'Electrician' },
  { icon: '🔧', label: 'Plumber' },
  { icon: '🪚', label: 'Carpentry' },
  { icon: '🧹', label: 'Home Cleaning' }       // Saw for carpentry
];
const CategoryGrid = () => {
  return (
    <section className="category-section">
      <h2 className="category-heading">Browse Hustles by Category</h2>
      <div className="category-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <div className="category-icon">{cat.icon}</div>
            <div className="category-label">{cat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
