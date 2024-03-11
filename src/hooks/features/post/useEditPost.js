import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useUpdatePost from "./useUpdatePost";

const useEditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const defaultValue = { title: "", content: "" };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onSubmit", defaultValue });

  const handleGetPostSuccess = (data) => {
    setValue("title", data.title);
    setValue("content", data.content);
  };

  const handleEditPostsSuccess = () => {
    navigate(`/posts/${id}`, { replace: true });
  };

  const { mutate: editPost } = useUpdatePost(handleEditPostsSuccess);

  const handleSubmitValue = (value) => {
    editPost({ id, ...value });
  };

  const titleErrorMessage = errors.title && errors.title.message;

  return {
    register,
    titleErrorMessage: titleErrorMessage,
    setInitialEditValue: handleGetPostSuccess,
    handleSubmit: handleSubmit(handleSubmitValue),
  };
};

export default useEditPost;
