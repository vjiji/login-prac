import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDeleteComment, useGetComments } from "hooks/features/comment";

const useComments = () => {
  const [editCommentId, setEditCommentId] = useState();
  const [deleteCommentId, setDeleteCommentId] = useState();

  const { id: postId } = useParams();
  const { data: comments } = useGetComments(postId);

  const { mutate: deleteComment } = useDeleteComment();
  const handleCommentDelete = () => {
    deleteComment({ postId, commentId: deleteCommentId });
    setDeleteCommentId(null);
  };

  return {
    comments,
    editCommentId,
    deleteCommentId,
    setEditCommentId,
    setDeleteCommentId,
    handleCommentDelete,
  };
};

export default useComments;
