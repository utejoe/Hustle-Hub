import React from 'react';
import './ListingCard.css';

const ListingCard = ({ title, image, price, school, whatsapp }) => {
  return (
    <div className="listing-card">
      <img src={image} alt={title} />
      <div className="listing-info">
        <h3>{title}</h3>
        <p className="price">₦{price}</p>
        <p className="school">{school}</p>
        <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
          Contact on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ListingCard;
