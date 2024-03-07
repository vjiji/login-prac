import { userInstance } from "./instance";

const userAPI = {
  register: (userInfo) => userInstance.post("/register", userInfo),
  login: (userInfo) => userInstance.post("/login", userInfo),
  getUser: () => userInstance.get("/user"),
};

export default userAPI;
