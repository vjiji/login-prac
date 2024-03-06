import axios from "axios";
import Cookies from "js-cookie";

const defaultInstance = axios.create({
  baseURL: "http://3.38.191.164",
});

export default defaultInstance;

defaultInstance.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
