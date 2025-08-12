import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../Context/AuthContext';
import './ChangePassword.css';

const ChangePassword = () => {
  const { user, token } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      return alert("New passwords do not match");
    }
    try {
      await axios.put(
        `/api/auth/update-password/${user._id}`,
        { currentPassword: formData.currentPassword, newPassword: formData.newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Password updated successfully!");
      setFormData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err) {
      alert(err.response?.data?.message || "Error updating password");
    }
  };

  return (
    
    <form 
    className="change-password-form" onSubmit={handleSubmit}>
      <h2>Change Password</h2>
      <input
        type="password"
        name="currentPassword"
        placeholder="Current Password"
        value={formData.currentPassword}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="newPassword"
        placeholder="New Password"
        value={formData.newPassword}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm New Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
      <button type="submit" className="btn">Update Password</button>
    </form>
  );
};

export default ChangePassword;
