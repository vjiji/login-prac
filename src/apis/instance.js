import axios from "axios";

const defaultInstance = axios.create({
  baseURL: "http://3.38.191.164",
});

export default defaultInstance;
