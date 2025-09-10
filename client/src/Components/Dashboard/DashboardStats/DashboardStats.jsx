import React, { useContext, useEffect, useState } from 'react';
import './DashboardStats.css';
import { AuthContext } from '../../../Context/AuthContext';
import { getUserListings } from '../../../api/postApi';

const DashboardStats = () => {
  const { token, user } = useContext(AuthContext);
  const [stats, setStats] = useState({ listings: 0, boosted: 0, verified: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        if (!token || !user) return;

        const res = await getUserListings(token);
        const allListings = res?.listings || [];

        // Filter listings that belong to the logged-in user
        const userListings = allListings.filter(
          l => l.userId?._id && String(l.userId._id) === String(user._id)
        );

        setStats({
          listings: userListings.length,
          boosted: userListings.filter(l => l.isBoosted).length,
          verified: userListings.filter(l => l.userId?.isVerified).length,
        });
      } catch (err) {
        console.error("Failed to fetch stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [token, user]);

  if (loading) return <div>Loading stats...</div>;

  return (
    <section className="dashboard-stats">
      <div className="stat-card">
        <h3>Listings</h3>
        <p>{stats.listings}</p>
      </div>
      <div className="stat-card">
        <h3>Boosted</h3>
        <p>{stats.boosted}</p>
      </div>
      <div className="stat-card">
        <h3>Verified</h3>
        <p>{stats.verified > 0 ? "Yes" : "No"}</p>
      </div>
    </section>
  );
};

export default DashboardStats;
