import React, { useContext } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/nav-logo.PNG';
import defaultAvatar from '../../Assets/user_profile.png'; 
import { AuthContext } from '../../Context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login after logout
  };

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
        {isAuthenticated ? (
          <>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
            <Link to="/profile" className="profile-avatar-nav-link" title="Go to Profile">
              <img
                src={user?.avatarUrl || defaultAvatar}
                alt="User Avatar"
                className="profile-avatar-nav"
              />
            </Link>
          </>
        ) : (
          <Link to="/login" className="login-btn">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
