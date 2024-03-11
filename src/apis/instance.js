import axios from "axios";
import Cookies from "js-cookie";

export const userInstance = axios.create({
  baseURL: process.env.REACT_APP_USER_BASE_URL,
});

userInstance.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export const postsInstance = axios.create({
  baseURL: process.env.REACT_APP_POST_BASE_URL,
});
