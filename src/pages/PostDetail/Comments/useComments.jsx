import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useDeleteCommentQuery,
  useGetCommentsQuery,
} from "hooks/commentsQuery";

const useComments = () => {
  const [editCommentId, setEditCommentId] = useState();
  const [deleteCommentId, setDeleteCommentId] = useState();

  const { id: postId } = useParams();
  const { data: comments } = useGetCommentsQuery(postId);

  const { mutate: deleteComment } = useDeleteCommentQuery();
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
