import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import BrowseListings from './Pages/BrowseListings'; // ✅ Import here
import PostListing from './Pages/PostListing';

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<BrowseListings />} />
            <Route path="/post" element={<PostListing />} />
            <Route path="/dashboard" element={<h2>Dashboard Page</h2>} />
            <Route path="/login" element={<h2>Login Page</h2>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
