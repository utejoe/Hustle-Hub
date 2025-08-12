import React, { useState, useContext } from 'react';
import './SignupForm.css';
import { AuthContext } from '../../../Context/AuthContext';

const SignupForm = () => {
  const { signup } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    school: "",
    isVendor: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData);
      alert("Signup successful! Please login.");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Create an Account</h2>
      <input name="name" type="text" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
      <input name="school" type="text" placeholder="School" value={formData.school} onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <label>
        <input name="isVendor" type="checkbox" checked={formData.isVendor} onChange={handleChange} />
        I am a vendor
      </label>
      <button type="submit" className="btn">Sign Up</button>
    </form>
  );
};

export default SignupForm;
