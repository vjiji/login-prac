const { default: defaultInstance } = require("./instance");

const userAPI = {
  register: (user) => defaultInstance.post("/register", user),
};

export default userAPI;
