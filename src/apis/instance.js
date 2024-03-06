import axios from "axios";
import Cookies from "js-cookie";

export const userInstance = axios.create({
  baseURL: "http://3.38.191.164",
});

userInstance.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export const postsInstance = axios.create({
  baseURL: "http://localhost:3001",
});
