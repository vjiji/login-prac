import { useInput } from "hooks/common";
import {
  useAddComment,
  useEditComment,
  useGetCommentDetail,
} from "hooks/features/comment";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useCommentForm = (commentId, setCommentId) => {
  const { id: userId } = useSelector((state) => state.user.user);
  const { id: postId } = useParams();
  const {
    value: content,
    handleValueChange: handleContentChange,
    resetValue: resetContent,
  } = useInput();

  const handleOnUpdateSuccess = () => {
    resetContent();
    setCommentId();
  };

  const { data } = useGetCommentDetail(postId, commentId);

  useEffect(() => {
    if (data) {
      resetContent(data.content);
    }
  }, [data]);

  const { mutate: createComment } = useAddComment(resetContent);

  const { mutate: updateComment } = useEditComment(handleOnUpdateSuccess);

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
