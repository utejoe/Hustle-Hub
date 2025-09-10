// client/src/Components/Protected/VendorRoute.jsx
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const VendorRoute = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Loading...</p>; // or a spinner
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ message: "Login first to post a hustle" }} />;
  }

  if (!user.isVendor) {
    return <Navigate to="/" replace state={{ message: "You must register as a vendor to post a hustle" }} />;
  }

  return <Outlet />;
};

export default VendorRoute;
