import { postsInstance } from "./instance";

const commentsAPI = {
  getComments: (postId) => postsInstance.get(`/posts/${postId}/comments`),
  createComment: (postId, comment) =>
    postsInstance.post(`/posts/${postId}/comments`, comment),
  deletComment: (postId, commentId) =>
    postsInstance.delete(`/posts/${postId}/comments/${commentId}`),
};

export default commentsAPI;
