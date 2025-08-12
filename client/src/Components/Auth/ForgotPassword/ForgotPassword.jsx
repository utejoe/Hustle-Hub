import React, { useState } from 'react';
import './ForgotPassword.css';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3300/api/auth/forgot-password', { email });
      setMessage(res.data.message || 'Password reset link sent to your email');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <form className="forgot-password-form" onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="btn">Send Reset Link</button>
      {message && <p style={{ marginTop: '10px' }}>{message}</p>}
    </form>
  );
};

export default ForgotPassword;
