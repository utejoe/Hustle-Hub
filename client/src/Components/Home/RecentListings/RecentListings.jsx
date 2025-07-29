import React from 'react';
import { Link } from 'react-router-dom';
import './RecentListings.css';
import Photographer from '../../../Assets/BwLst/photgrapher.jpeg';
import MakeupArtist from '../../../Assets/BwLst/makeup-artist.jpg';
import Laundry from '../../../Assets/BwLst/laundry.jpeg';

const sampleListings = [
  {
    _id: '1',
    title: 'Photographer for Events',
    price: '₦5000',
    campus: 'UNILAG',
    image: Photographer
  },
  {
    _id: '2',
    title: 'Makeup Artist – Budget Friendly',
    price: '₦3000',
    campus: 'OAU',
    image: MakeupArtist
  },
  {
    _id: '3',
    title: 'Laundry Services (Same Day)',
    price: '₦2000',
    campus: 'UI',
    image: Laundry
  }
];

const RecentListings = () => {
  return (
    <section className="recent-section">
      <h2 className="recent-heading">Recent Hustle Listings</h2>
      <div className="listing-grid">
        {sampleListings.map((item) => (
          <div className="listing-card" key={item._id}>
            <img src={item.image} alt={item.title} className="listing-image" />
            <div className="listing-details">
              <h3 className="listing-title">{item.title}</h3>
              <p className="listing-price">{item.price}</p>
              <p className="listing-campus">{item.campus}</p>
              <Link to={`/listing/${item._id}`} className="view-details-btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentListings;
