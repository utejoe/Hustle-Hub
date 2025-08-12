import React, { useState, useContext } from 'react';
import './LoginForm.css';
import { AuthContext } from '../../../Context/AuthContext';
import { Link } from 'react-router-dom'; // ✅ Import Link

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.type]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      alert("Login successful!");
      window.location.href = "/dashboard";
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Login to Your Account</h2>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit" className="btn">Login</button>

      {/* ✅ Change password link inside the return */}
      <div style={{ marginTop: "15px" }}>
        <Link to="/forgot-password">Forgot Password?</Link>   
      </div>
    </form>
  );
};

export default LoginForm;
