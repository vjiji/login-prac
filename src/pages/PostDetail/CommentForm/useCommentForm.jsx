import { useInput } from "hooks";
import {
  useAddCommentQuery,
  useEditCommentQuery,
  useGetCommentDetailQuery,
} from "hooks/commentsQuery";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useCommentForm = (commentId, setCommentId) => {
  const { id: userId } = useSelector((state) => state.user.user);
  const { id: postId } = useParams();
  const [content, handleContentChange, resetContent] = useInput();

  const handleOnUpdateSuccess = () => {
    resetContent();
    setCommentId();
  };

  const { data } = useGetCommentDetailQuery(postId, commentId);

  useEffect(() => {
    if (data) {
      resetContent(data.content);
    }
  }, [data]);

  const { mutate: createComment } = useAddCommentQuery(resetContent);

  const { mutate: updateComment } = useEditCommentQuery(handleOnUpdateSuccess);

  return {
    content,
    userId,
    postId,
    handleContentChange,
    createComment,
    updateComment,
    handleOnUpdateSuccess,
  };
};
export default useCommentForm;