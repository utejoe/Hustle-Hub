import React from 'react';
import ListingCard from '../ListingCard/ListingCard';
import './ListingsGrid.css';

const ListingsGrid = ({ listings }) => {
  return (
    <div className="listings-grid">
      {listings.map((item) => (
        <ListingCard key={item._id} {...item} />
      ))}
    </div>
  );
};

export default ListingsGrid;
