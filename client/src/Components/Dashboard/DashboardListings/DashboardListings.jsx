import React from 'react';
import './DashboardListings.css';

const dummyListings = [
  {
    id: 1,
    title: 'Graphic Design',
    price: '₦5000',
    status: 'Active'
  },
  {
    id: 2,
    title: 'Makeup Services',
    price: '₦3000',
    status: 'Boosted'
  },
  {
    id: 3,
    title: 'Typing & Printing',
    price: '₦1000',
    status: 'Pending'
  }
];

const DashboardListings = () => {
  return (
    <section className="dashboard-listings">
      <h2>Your Listings</h2>
      <div className="listing-grid">
        {dummyListings.map(listing => (
          <div key={listing.id} className="listing-card">
            <h4>{listing.title}</h4>
            <p><strong>Price:</strong> {listing.price}</p>
            <p><strong>Status:</strong> <span className={`status-badge ${listing.status.toLowerCase()}`}>{listing.status}</span></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DashboardListings;
