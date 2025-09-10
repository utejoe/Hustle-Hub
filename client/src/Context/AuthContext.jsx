import React, { createContext, useState, useEffect } from "react";
import * as authApi from "../api/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!token;

  // Fetch current user from backend when token changes or on mount
useEffect(() => {
  console.log("Token changed or mounted:", token);

  const fetchCurrentUser = async () => {
    if (!token) {
      console.log("No token, clearing user");
      setUser(null);
      setLoading(false);
      return;
    }
    try {
      const res = await authApi.getCurrentUser(token);
      console.log("Current user data received:", res.data.user);
      setUser(res.data.user);
    } catch (error) {
      console.error("Failed to fetch current user:", error.response?.data || error.message);
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  };

    fetchCurrentUser();
  }, [token]);

  const login = async (formData) => {
    const res = await authApi.login(formData);
    setUser(res.data.user);
    setToken(res.data.token);
    localStorage.setItem("token", res.data.token);
  };

  const signup = async (formData) => {
    const res = await authApi.signup(formData);
    return res.data;
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  // other methods ...

  if (loading) return <div>Loading...</div>;

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        setUser,
        isAuthenticated,
        login,
        signup,
        logout,
        // other methods...
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
