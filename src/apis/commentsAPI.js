import { postsInstance } from "./instance";

const commentsAPI = {
  getComments: (postId) => postsInstance.get(`/posts/${postId}/comments`),
  createComment: (postId, comment) =>
    postsInstance.post(`/posts/${postId}/comments`, comment),
  getCommentDetail: (postId, commentId) =>
    postsInstance.get(`/posts/${postId}/comments/${commentId}`),
  updateComment: (postId, commentId, comment) =>
    postsInstance.put(`/posts/${postId}/comments/${commentId}`, comment),
  deleteComment: (postId, commentId) =>
    postsInstance.delete(`/posts/${postId}/comments/${commentId}`),
};

export default commentsAPI;
