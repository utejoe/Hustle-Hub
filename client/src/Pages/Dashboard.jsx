import React from 'react';
import '../Components/Dashboard/Dashboard.css'
import DashboardHeader from '../Components/Dashboard/DashboardHeader/DashboardHeader';
import DashboardStats from '../Components/Dashboard/DashboardStats/DashboardStats';
import DashboardActions from '../Components/Dashboard/DashboardActions/DashboardActions';
import DashboardListings from '../Components/Dashboard/DashboardListings/DashboardListings';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <DashboardHeader />
      <DashboardStats />
      <DashboardActions />
      <DashboardListings />
    </div>
  );
};

export default Dashboard;
