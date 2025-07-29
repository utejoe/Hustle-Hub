import React from 'react';
import { Link } from 'react-router-dom';
import './ListingCard.css';

const ListingCard = ({ _id, title, image, price, school }) => {
  return (
    <div className="listing-card">
      <img src={image} alt={title} />
      <div className="listing-info">
        <h3>{title}</h3>
        <p className="price">₦{price}</p>
        <p className="school">{school}</p>
        <Link to={`/listing/${_id}`} className="view-details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;
