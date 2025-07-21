import React from 'react';
import './SignupForm.css';

const SignupForm = () => {
  return (
    <form className="auth-form">
      <h2>Create an Account</h2>
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email" required />
      <input type="tel" placeholder="Phone Number" required />
      <input type="password" placeholder="Password" required />
      <button type="submit" className="btn">Sign Up</button>
    </form>
  );
};

export default SignupForm;
