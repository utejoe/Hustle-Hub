import React from 'react';
import './RecentListings.css';

const sampleListings = [
  {
    title: 'Photographer for Events',
    price: '₦5000',
    campus: 'UNILAG',
    image: 'https://via.placeholder.com/150',
    link: 'https://wa.me/2348100000000'
  },
  {
    title: 'Makeup Artist – Budget Friendly',
    price: '₦3000',
    campus: 'OAU',
    image: 'https://via.placeholder.com/150',
    link: 'https://wa.me/2348100000001'
  },
  {
    title: 'Laundry Services (Same Day)',
    price: '₦2000',
    campus: 'UI',
    image: 'https://via.placeholder.com/150',
    link: 'https://wa.me/2348100000002'
  }
];

const RecentListings = () => {
  return (
    <section className="recent-section">
      <h2 className="recent-heading">Recent Hustle Listings</h2>
      <div className="listing-grid">
        {sampleListings.map((item, index) => (
          <div className="listing-card" key={index}>
            <img src={item.image} alt={item.title} className="listing-image" />
            <div className="listing-details">
              <h3 className="listing-title">{item.title}</h3>
              <p className="listing-price">{item.price}</p>
              <p className="listing-campus">{item.campus}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn contact-btn">Contact</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentListings;
