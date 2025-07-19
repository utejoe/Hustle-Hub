import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Turn Your Skills Into Cash on Campus</h1>
        <p>List your hustle. Get discovered. Start earning today.</p>
        <div className="hero-buttons">
          <Link to="/explore" className="hero-btn explore-btn">Explore Hustles</Link>
          <Link to="/post" className="hero-btn post-btn">Post Your Hustle</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
