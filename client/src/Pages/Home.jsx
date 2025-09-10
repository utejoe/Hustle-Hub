// client/src/Pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeroSection from '../Components/Home/HeroSection/HeroSection';
import CategoryGrid from '../Components/Home/CategoryGrid/CategoryGrid';
import RecentListings from '../Components/Home/RecentListings/RecentListings';
import HowItWorks from '../Components/Home/HowItWorks/HowItWorks';
import CallToAction from '../Components/Home/CallToAction/CallToAction';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState(location.state?.message || null);

  useEffect(() => {
    if (message) {
      // Clear message after 5s
      const timer = setTimeout(() => setMessage(null), 5000);

      // Remove message from state so it doesn’t persist on refresh
      navigate(location.pathname, { replace: true, state: {} });

      return () => clearTimeout(timer);
    }
  }, [message, location.pathname, navigate]);

  return (
    <div>
      {message && (
        <div style={{ 
          position: "fixed",        // stays in place
          top: "70px",              // below navbar
          left: "50%", 
          transform: "translateX(-50%)",
          background: "#FFA500", 
          color: "#fff",
          padding: "12px", 
          textAlign: "center", 
          border: "1px solid red", 
          borderRadius: "8px",
          fontWeight: "500",
          zIndex: 1000,
          width: "100%",            
          maxWidth: "600px"         
        }}>
          {message}
        </div>
      )}
      <HeroSection />
      <CategoryGrid />
      <RecentListings />
      <HowItWorks />
      <CallToAction />
    </div>
  );
};

export default Home;
