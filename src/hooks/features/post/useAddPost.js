import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useCreatePost from "./useCreatePost";

const useAddPost = () => {
  const { id } = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const defaultValue = { title: "", content: "" };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit", defaultValue });

  const handleAddPostsSuccess = (data) => {
    const { id } = data;
    navigate(`/posts/${id}`, { replace: true });
  };

  const { mutate: createPost } = useCreatePost(handleAddPostsSuccess);

  const handleAddPost = (value) => {
    createPost({
      ...value,
      writer: id,
    });
  };

  const titleErrorMessage = errors.title && errors.title.message;

  return {
    register,
    handleSubmit: handleSubmit(handleAddPost),
    titleErrorMessage,
  };
};

export default useAddPost;
