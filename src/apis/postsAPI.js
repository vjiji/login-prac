import { postsInstance } from "./instance";

const postsAPI = {
  getPosts: () => postsInstance.get("/posts"),
  createPost: (post) => postsInstance.post("/posts", post),
  updatePost: ({ id, title, content }) =>
    postsInstance.put(`/posts/${id}`, { title, content }),
  deletePost: (id) => postsInstance.delete(`/posts/${id}`),
};

export default postsAPI;
