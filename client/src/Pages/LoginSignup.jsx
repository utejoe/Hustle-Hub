// client/src/Pages/LoginSignup.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import '../Components/Auth/LoginSignup.css'
import LoginForm from '../Components/Auth/LoginForm/LoginForm';
import SignupForm from '../Components/Auth/SignupForm/SignupForm';
import AuthSwitcher from '../Components/Auth/AuthSwitcher/AuthSwitcher';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState(location.state?.message || null);

  useEffect(() => {
    if (message) {
      // Clear message after 5s
      const timer = setTimeout(() => setMessage(null), 5000);

      // Clear the state so it doesn’t stick on refresh
      navigate(location.pathname, { replace: true, state: {} });

      return () => clearTimeout(timer);
    }
  }, [message, location.pathname, navigate]);

  return (
    <div className="auth-page">
      {message && (
        <div style={{ 
          position: "fixed",        // stays in place
          top: "70px",              // below navbar
          left: "50%", 
          transform: "translateX(-50%)",
          background: "#FFA500", 
          color: "#fff",
          padding: "12px", 
          textAlign: "center", 
          border: "1px solid red", 
          borderRadius: "8px",
          fontWeight: "500",
          zIndex: 1000,
          width: "100%",            // take full row
          maxWidth: "600px"         // 👈 your size limit preserved
        }}>
          {message}
        </div>
      )}
      <AuthSwitcher isLogin={isLogin} setIsLogin={setIsLogin} />
      {isLogin ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default LoginSignup;
