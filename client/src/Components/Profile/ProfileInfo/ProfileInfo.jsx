import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import "./ProfileInfo.css";

const ProfileInfo = () => {
  const { user } = useContext(AuthContext);

  if (!user) return null;

  return (
    <section className="profile-info-section">
      <h2>Profile Information</h2>
      <p>
        <strong>Name:</strong> <span>{user.firstName} {user.lastName}</span>
      </p>
      <p>
        <strong>Email:</strong> <span>{user.email}</span>
      </p>
      <p>
        <strong>Phone:</strong> <span>{user.phone || "Not provided"}</span>
      </p>
      <p>
        <strong>School:</strong> <span>{user.school || "Not provided"}</span>
      </p>
      <p>
        <strong>Vendor:</strong> <span>{user.isVendor ? "Yes" : "No"}</span>
      </p>
      <p>
        <strong>Verified:</strong> <span>{user.isVerified ? "Yes" : "No"}</span>
      </p>
      <p>
        <strong>Premium:</strong> <span>{user.premium ? "Yes" : "No"}</span>
      </p>
      <p>
        <strong>Member Since:</strong> <span>{new Date(user.createdAt).toLocaleDateString()}</span>
      </p>
    </section>
  );
};

export default ProfileInfo;
