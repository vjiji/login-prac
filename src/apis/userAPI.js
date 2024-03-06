const { default: defaultInstance } = require("./instance");

const userAPI = {
  register: (userInfo) => defaultInstance.post("/register", userInfo),
  login: (userInfo) => defaultInstance.post("/login", userInfo),
  getUser: () => defaultInstance.get("/user"),
};

export default userAPI;
