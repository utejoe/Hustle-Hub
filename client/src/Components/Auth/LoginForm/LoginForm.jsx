import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <form className="auth-form">
      <h2>Login to Your Account</h2>
      <input type="email" placeholder="Email" required />
      <input type="tel" placeholder="Phone Number" required />
      <input type="password" placeholder="Password" required />
      <button type="submit" className="btn">Login</button>
    </form>
  );
};

export default LoginForm;
