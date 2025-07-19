import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    icon: '📝',
    title: 'Sign Up',
    description: 'Create an account as a student or campus vendor in less than 1 minute.'
  },
  {
    icon: '📤',
    title: 'Post or Explore',
    description: 'Vendors post their hustle, while students explore listings by category or campus.'
  },
  {
    icon: '🤝',
    title: 'Connect & Earn',
    description: 'Use WhatsApp links to chat, hire, and build your brand around campus.'
  }
];

const HowItWorks = () => {
  return (
    <section className="how-section">
      <h2 className="how-heading">How It Works</h2>
      <div className="how-grid">
        {steps.map((step, index) => (
          <div className="how-card" key={index}>
            <div className="how-icon">{step.icon}</div>
            <h3 className="how-title">{step.title}</h3>
            <p className="how-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
