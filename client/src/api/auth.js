import axios from "axios";

const API_URL = "http://localhost:3300/api/auth"; // change for production

export const signup = (data) => axios.post(`${API_URL}/signup`, data);
export const login = (data) => axios.post(`${API_URL}/login`, data);
