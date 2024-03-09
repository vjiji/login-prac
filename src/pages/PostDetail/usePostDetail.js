import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useDeletePostQuery, useGetPostDetailQuery } from "hooks/postsQuery";

const usePostDetail = () => {
  const navigate = useNavigate();
  const { id: userId } = useSelector((state) => state.user.user);
  const { id: postId } = useParams();
  const { data: post } = useGetPostDetailQuery(postId);
  const [isModalOpen, setIsModalOpen] = useState();

  const handleDeleteSuccess = () => navigate("/");

  const { mutate: deletePost } = useDeletePostQuery(handleDeleteSuccess);

  const handleDeletePost = () => {
    deletePost(postId);
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return {
    post,
    userId,
    postId,
    isModalOpen,
    handleDeletePost,
    handleModalOpen,
  };
};

export default usePostDetail;
