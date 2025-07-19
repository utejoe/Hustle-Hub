import React from 'react';
import './CallToAction.css';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-heading">Ready to Hustle or Hire?</h2>
        <p className="cta-text">Join the fastest growing student platform for campus side gigs across Nigeria.</p>
        <div className="cta-buttons">
          <Link to="/explore" className="btn explore-cta">Explore Hustles</Link>
          <Link to="/post" className="btn post-cta">Post Your Hustle</Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
