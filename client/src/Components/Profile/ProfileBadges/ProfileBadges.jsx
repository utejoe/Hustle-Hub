import React from "react";
import "./ProfileBadges.css";

const ProfileBadges = () => {
  // Replace with dynamic badges if you want
  const badges = [
    { id: 1, label: "🎉 Event Starter" },
    { id: 2, label: "🔥 Active Attendee" },
    { id: 3, label: "🏆 Top Host" },
  ];

  return (
    <section className="profile-badges">
      <h2>Badges Earned</h2>
      <div className="badges-grid">
        {badges.map((badge) => (
          <span key={badge.id} className="badge">
            {badge.label}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ProfileBadges;
