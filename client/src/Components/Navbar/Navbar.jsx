import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../Assets/nav-logo.PNG'; 

const Navbar = () => {
  const isLoggedIn = false; // Replace later with real auth logic

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="HustleHub Logo" className="logo-img" />
          <span className="logo-text">Campus Hustle</span>
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/post">Post-Hustle</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
      <div className="navbar-auth">
        {isLoggedIn ? (
          <button className="logout-btn">Logout</button>
        ) : (
          <Link to="/login" className="login-btn">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
