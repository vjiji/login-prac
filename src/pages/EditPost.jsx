import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostForm } from "components/features/post";
import { useEditPost, useGetPostDetail } from "hooks/features/post";

const EditPost = () => {
  const { id } = useParams();
  const { data } = useGetPostDetail(id);

  const { register, titleErrorMessage, setInitialEditValue, handleSubmit } =
    useEditPost();

  useEffect(() => {
    if (data) {
      setInitialEditValue(data);
    }
  }, [data]);

  if (!data) return <div>...loading</div>;

  return (
    <PostForm
      register={register}
      handleSubmit={handleSubmit}
      titleErrorMessage={titleErrorMessage}
      buttonName="수정완료"
    />
  );
};

export default EditPost;
