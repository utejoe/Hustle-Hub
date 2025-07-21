import React from 'react';
import './AuthSwitcher.css';

const AuthSwitcher = ({ isLogin, setIsLogin }) => {
  return (
    <div className="auth-switcher">
      <button
        className={isLogin ? 'active' : ''}
        onClick={() => setIsLogin(true)}
      >
        Login
      </button>
      <button
        className={!isLogin ? 'active' : ''}
        onClick={() => setIsLogin(false)}
      >
        Sign Up
      </button>
    </div>
  );
};

export default AuthSwitcher;
