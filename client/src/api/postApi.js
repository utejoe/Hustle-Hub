// client/src/api/postApi.js
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3300/api";

// ✅ Create a new listing
export const createListing = async (listingData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data", // 👈 important for file upload
    },
  };

  const response = await axios.post(`${BASE_URL}/listings`, listingData, config);
  return response.data;
};

// ✅ Fetch all listings for the current user
export const getUserListings = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await axios.get(`${BASE_URL}/listings`, config);
  return response.data;
};
