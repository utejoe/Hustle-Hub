import React, { useContext, useEffect, useState } from 'react';
import './DashboardListings.css';
import { AuthContext } from '../../../Context/AuthContext';
import { getUserListings } from '../../../api/postApi';

const DashboardListings = () => {
  const { token, user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        if (!token || !user) return;

        const res = await getUserListings(token);
        const allListings = res?.listings || [];

        // Filter listings that belong to the logged-in user
        const userListings = allListings.filter(
          l => l.userId?._id && String(l.userId._id) === String(user._id)
        );

        setListings(userListings);
      } catch (err) {
        console.error("Failed to fetch listings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [token, user]);

  if (loading) return <div>Loading your listings...</div>;

  return (
    <section className="dashboard-listings">
      <h2>Your Listings</h2>
      <div className="listing-grid">
        {listings.length === 0 ? (
          <p>You have no listings yet. ➕ Post one!</p>
        ) : (
          listings.map(listing => (
            <div key={listing._id} className="listing-card">
              <h4>{listing.title}</h4>
              <p><strong>Price:</strong> ₦{listing.price}</p>
              <p>
                <strong>Status:</strong>{' '}
                <span className={`status-badge ${listing.status?.toLowerCase()}`}>
                  {listing.status?.charAt(0).toUpperCase() + listing.status?.slice(1)}
                </span>
              </p>
              <p><strong>Boosted:</strong> {listing.isBoosted ? "Yes" : "No"}</p>
              <p><strong>Verified:</strong> {listing.userId?.isVerified ? "Yes" : "No"}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default DashboardListings;
