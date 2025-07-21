import React from 'react';
import './DashboardActions.css';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className="dashboard-actions">
      <Link to="/post" className="btn action-btn">➕ Post New Hustle</Link>
      <button className="btn action-btn boost-btn">🚀 Boost a Listing</button>
    </div>
  );
};

export default DashboardActions;
