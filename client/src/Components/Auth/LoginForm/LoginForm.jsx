import React, { useState, useContext } from 'react';
import './LoginForm.css';
import { AuthContext } from '../../../Context/AuthContext';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ identifier: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
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
        name="identifier"
        type="text"
        placeholder="Username or Email"
        value={formData.identifier}
        onChange={handleChange}
        required
      />

      <div className="password-wrapper">
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button
          type="button"
          className="password-toggle"
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? "🙉" : "🙈" }
        </button>
      </div>

      <button type="submit" className="btn">Login</button>

      <div style={{ marginTop: "15px" }}>
        <Link to="/forgot-password">Forgot Password?</Link>   
      </div>
    </form>
  );
};

export default LoginForm;
