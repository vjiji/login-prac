import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useAddComment,
  useEditComment,
  useGetCommentDetail,
} from "hooks/features/comment";

const useCommentForm = (commentId, setCommentId) => {
  const { id: userId } = useSelector((state) => state.user.user);
  const { id: postId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ mode: "onSubmit", defaultValues: { content: "" } });

  const { data } = useGetCommentDetail(postId, commentId);

  useEffect(() => {
    if (data) {
      setValue("content", data.content);
    }
  }, [data]);

  const { mutate: createComment } = useAddComment(() =>
    setValue("content", "")
  );

  const handleOnUpdateSuccess = () => {
    setValue("content", "");
    setCommentId();
  };

  const { mutate: updateComment } = useEditComment(handleOnUpdateSuccess);

  return {
    userId,
    postId,
    errorMessage: errors?.content && errors.content.message,
    register,
    onSubmit: handleSubmit,
    createComment,
    updateComment,
    handleUpdateCancelClick: handleOnUpdateSuccess,
  };
};
export default useCommentForm;
