import { useParams } from "react-router-dom";
import { useInput } from "hooks";
import {
  useGetCommentDetailQuery,
  useGetCommentsQuery,
} from "hooks/commentsQuery";
import { useEffect, useState } from "react";

const useComments = () => {
  const [commentId, setCommentId] = useState();
  const { id: postId } = useParams();
  const { data: comments } = useGetCommentsQuery(postId);

  return { comments, commentId, setCommentId };
};

export default useComments;
