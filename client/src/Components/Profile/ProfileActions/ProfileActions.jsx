import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./ProfileActions.css";

const ProfileActions = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <div className="profile-actions">
      <Link to="/change-password" className="btn">
        Change Password
      </Link>
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
    </div>
  );
};

export default ProfileActions;
