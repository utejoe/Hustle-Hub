import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../Context/AuthContext';
import "./ResetPassword.css";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const { resetPassword } = useContext(AuthContext);

  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("ResetPassword mounted with token:", token);
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await resetPassword(token, newPassword);
      setMessage(res.message);
      if (res.success) {
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (err) {
      setMessage(err.response?.data?.message || err.message || "Something went wrong");
    }
  };

  return (
    <form className="reset-password-form" onSubmit={handleSubmit}>
      <h2>Reset Password</h2>
      <input
        type="password"
        placeholder="Enter new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <button type="submit">Reset Password</button>
      {message && <p className="message">{message}</p>}
    </form>
  );
};

export default ResetPassword;
