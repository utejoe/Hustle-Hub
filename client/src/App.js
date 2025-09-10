import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import BrowseListings from './Pages/BrowseListings';
import PostListing from './Pages/PostListing';
import Dashboard from './Pages/Dashboard';
import LoginSignup from './Pages/LoginSignup'; // ✅ Imported here
import ChangePassword from './Components/Auth/ChangePassword/ChangePassword';
import ForgotPassword from './Components/Auth/ForgotPassword/ForgotPassword';
import ResetPassword from './Components/Auth/ResetPassword/ResetPassword';
import Profile from './Pages/Profile';
import VendorRoute from './Components/Protected/VendorRoute';

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<BrowseListings />} />

            {/* Protected Vendor Route */}
            <Route element={<VendorRoute />}>
              <Route path="/post" element={<PostListing />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/change-password" element={<ChangePassword /> } /> 
            <Route path="/forgot-password" element={<ForgotPassword /> } />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/profile" element={<Profile /> } />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
