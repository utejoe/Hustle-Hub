// client/src/api/auth.js
import axios from "axios";

const API_URL = "http://localhost:3300/api/auth"; // change for production

// No token required
export const signup = (data) => axios.post(`${API_URL}/signup`, data);
export const login = (data) => axios.post(`${API_URL}/login`, data);
export const forgotPassword = (email) =>
  axios.post(`${API_URL}/forgot-password`, { email });
export const resetPassword = (token, newPassword) =>
  axios.post(`${API_URL}/reset-password/${token}`, { newPassword });

// Token required - pass token as arg
export const updatePassword = (userId, data, token) => {
  return axios.put(`${API_URL}/update-password/${userId}`, data, {
    headers: { Authorization: `Bearer ${token}` }, // ✅ updated
  });
};

// ✅ Standardized current user fetch
export const getCurrentUser = (token) => {
  return axios.get(`${API_URL}/current-user`, {
    headers: { Authorization: `Bearer ${token}` }, // ✅ updated
  });
};
