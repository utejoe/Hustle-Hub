import React from "react";
import "./ProfileStats.css";

const ProfileStats = () => {
  // Dummy stats, replace with real user stats if you want
  const stats = [
    { id: 1, value: 12, label: "Events Attended" },
    { id: 2, value: 5, label: "Tickets Bought" },
    { id: 3, value: 3, label: "Events Hosted" },
  ];

  return (
    <section className="profile-stats">
      <h2>Stats Summary</h2>
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-item">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfileStats;
