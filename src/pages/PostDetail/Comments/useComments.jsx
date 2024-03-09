import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useDeleteCommentQuery,
  useGetCommentsQuery,
} from "hooks/commentsQuery";

const useComments = () => {
  const [commentId, setCommentId] = useState();
  const { id: postId } = useParams();
  const { data: comments } = useGetCommentsQuery(postId);
  const { mutate: deleteComment } = useDeleteCommentQuery();

  return { postId, comments, commentId, setCommentId, deleteComment };
};

export default useComments;
