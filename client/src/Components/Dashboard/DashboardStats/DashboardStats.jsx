import React from 'react';
import './DashboardStats.css';

const DashboardStats = () => {
  return (
    <section className="dashboard-stats">
      <div className="stat-card">
        <h3>Listings</h3>
        <p>12</p>
      </div>
      <div className="stat-card">
        <h3>Boosted</h3>
        <p>3</p>
      </div>
      <div className="stat-card">
        <h3>Verified</h3>
        <p>Yes</p>
      </div>
    </section>
  );
};

export default DashboardStats;
