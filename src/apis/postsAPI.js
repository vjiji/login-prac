import { postsInstance } from "./instance";

const postsAPI = {
  getPosts: () => postsInstance.get("/posts"),
  getPostDetail: (id) => postsInstance.get(`/posts/${id}`),
  createPost: (post) => postsInstance.post("/posts", post),
  updatePost: (post) => postsInstance.put(`/posts/${post.id}`, post),
  deletePost: (id) => postsInstance.delete(`/posts/${id}`),
};

export default postsAPI;
