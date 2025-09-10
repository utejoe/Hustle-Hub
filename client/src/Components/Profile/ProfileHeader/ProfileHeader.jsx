import React, { useState, useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import "./ProfileHeader.css";

const ProfileHeader = () => {
  const { user, token, setUser } = useContext(AuthContext);
  const [avatar, setAvatar] = useState(null);
  const [newAvatarFile, setNewAvatarFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef();

  // Removed fetchUserProfile and its useEffect to avoid double-fetching and flicker

  // Update avatar when user changes
  useEffect(() => {
    if (user?.avatarUrl) {
      setAvatar(user.avatarUrl);
    } else {
      setAvatar(null);
    }
  }, [user]);

  // Choose file & preview locally
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setNewAvatarFile(file);
    const reader = new FileReader();
    reader.onloadend = () => setAvatar(reader.result);
    reader.readAsDataURL(file);
  };

  // Save avatar to server and refresh profile in context
  const handleSaveAvatar = async () => {
    if (!newAvatarFile) {
      alert("Please select an image first.");
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("avatar", newAvatarFile);

      const res = await fetch("http://localhost:3300/api/avatar/upload-avatar", {
        method: "POST",
        headers: { "auth-token": token },
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        // Instead of fetchUserProfile, rely on AuthContext to refresh user,
        // so let's call setUser here with updated user data if available:
        if (data.user) {
          setUser(data.user);
        } else {
          // Optionally, refetch user here via a separate function you can expose from AuthContext
          // or trigger a token refresh
        }
        setNewAvatarFile(null);
        alert("Avatar saved successfully!");
      } else {
        alert(data.message || "Failed to save avatar.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to save avatar.");
    }
    setUploading(false);
  };

  // Remove avatar
  const handleRemoveAvatar = async () => {
    if (!window.confirm("Are you sure you want to remove your avatar?")) return;

    try {
      const res = await fetch("http://localhost:3300/api/avatar/remove-avatar", {
        method: "DELETE",
        headers: { "auth-token": token },
      });
      const data = await res.json();
      if (data.success) {
        if (data.user) {
          setUser(data.user);
        } else {
          setUser((prev) => ({ ...prev, avatarUrl: null }));
        }
        setAvatar(null);
        setNewAvatarFile(null);
      } else {
        alert(data.message || "Failed to remove avatar.");
      }
    } catch {
      alert("Failed to remove avatar.");
    }
  };

  if (!user) return null;

  return (
    <section className="profile-header">
      <div className="avatar-wrapper">
        <img
          src={avatar || "/default-avatar.png"}
          alt="User Avatar"
          className="profile-avatar"
        />
        <div className="avatar-actions">
          <button
            className="btn upload-btn"
            onClick={() => fileInputRef.current.click()}
            disabled={uploading}
          >
            Change
          </button>

          {newAvatarFile && (
            <button
              className="btn save-btn"
              onClick={handleSaveAvatar}
              disabled={uploading}
            >
              {uploading ? "Saving..." : "Save"}
            </button>
          )}

          {avatar && !newAvatarFile && (
            <button
              className="btn remove-btn"
              onClick={handleRemoveAvatar}
              disabled={uploading}
            >
              Remove
            </button>
          )}

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
      </div>

      <div className="profile-info">
        <h2 className="profile-username">
          @{(user.username || "").replace(/\s+/g, "").toLowerCase()}

          {user.isVerified ? (
            <span className="verified-badge">✔ Verified</span>
          ) : (
            <span className="unverified-badge">❌ Unverified</span>
          )}

          {user.isVendor && (
            <span className="vendor-badge">🏷 Vendor</span>
          )}
        </h2>

        {!user.isVerified && (
          <p className="verify-message">
            Kindly verify your account. <a href="/verify">Click here to verify</a>.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProfileHeader;
