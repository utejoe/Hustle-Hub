import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import axios from "axios";
import "./ProfileDetails.css";

const ProfileDetails = () => {
  const { user, token, logout } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    school: "",
    isVendor: false,
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        username: user.username || "",
        email: user.email || "",
        phone: user.phone || "",
        school: user.school || "",
        isVendor: user.isVendor || false,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await axios.put(
        `http://localhost:3300/api/auth/update-profile`,
        formData,
        { headers: { "auth-token": token } }
      );
      setMessage("Profile updated successfully!");
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <p>Please login to view your profile.</p>;

  return (
    <form className="profile-details-form" onSubmit={handleSubmit}>
      <label>
        First Name
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Last Name
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Username
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email (read-only)
        <input type="email" name="email" value={formData.email} readOnly />
      </label>

      <label>
        Phone Number
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        School
        <input
          type="text"
          name="school"
          value={formData.school}
          onChange={handleChange}
          required
        />
      </label>

      <label className="checkbox-label">
        <input
          type="checkbox"
          name="isVendor"
          checked={formData.isVendor}
          onChange={handleChange}
        />
        I am a vendor
      </label>

      <button type="submit" className="btn" disabled={loading}>
        {loading ? "Updating..." : "Save Changes"}
      </button>
      {message && <p className="message">{message}</p>}
    </form>
  );
};

export default ProfileDetails;
