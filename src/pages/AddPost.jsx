import { PostForm } from "components/features/post";
import { useAddPost } from "hooks/features/post";

const AddPost = () => {
  const { register, handleSubmit, titleErrorMessage } = useAddPost();

  return (
    <PostForm
      register={register}
      handleSubmit={handleSubmit}
      titleErrorMessage={titleErrorMessage}
      buttonName="작성완료"
    />
  );
};

export default AddPost;
