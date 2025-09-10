import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const { forgotPassword } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await forgotPassword(email);
      setMessage(res.message || 'Password reset link sent to your email');
    } catch (err) {
      setMessage(err.response?.data?.message || err.message || 'Something went wrong');
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
