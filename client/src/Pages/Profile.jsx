import React from "react";
import ProfileHeader from "../Components/Profile/ProfileHeader/ProfileHeader";
import ProfileInfo from "../Components/Profile/ProfileInfo/ProfileInfo";
import ProfileCompletion from "../Components/Profile/ProfileCompletion/ProfileCompletion";
import ProfileBadges from "../Components/Profile/ProfileBadges/ProfileBadges";
import ProfileStats from "../Components/Profile/ProfileStats/ProfileStats";
import ProfileDetails from "../Components/Profile/ProfileDetails/ProfileDetails";
import ProfileActions from "../Components/Profile/ProfileActions/ProfileActions";
import "../Components/Profile/ProfileCommon.css";

const Profile = () => {
  return (
    <div
      className="profile-page"
      style={{
        maxWidth: "1100px",
        margin: "60px auto 80px",
        padding: "0 20px",
      }}
    >
      <h1 style={{ color: "var(--dark-bg)", marginBottom: "40px" }}>
        Your Profile
      </h1>

      <div className="profile-card"><ProfileHeader /></div>

      {/* ✅ Profile Information BEFORE completion */}
      <div className="profile-card"><ProfileInfo /></div>

      <div className="profile-card profile-completion"><ProfileCompletion /></div>
      <div className="profile-card"><ProfileBadges /></div>
      <div className="profile-card"><ProfileStats /></div>
      <div className="profile-card"><ProfileDetails /></div>
      <ProfileActions />
    </div>
  );
};

export default Profile;
