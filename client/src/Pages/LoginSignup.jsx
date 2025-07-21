import React, { useState } from 'react';
import '../Components/Auth/LoginSignup.css'
import LoginForm from '../Components/Auth/LoginForm/LoginForm';
import SignupForm from '../Components/Auth/SignupForm/SignupForm';
import AuthSwitcher from '../Components/Auth/AuthSwitcher/AuthSwitcher';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      <AuthSwitcher isLogin={isLogin} setIsLogin={setIsLogin} />
      {isLogin ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default LoginSignup;
