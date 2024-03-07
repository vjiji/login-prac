import postsAPI from "apis/postsAPI";
import { useMutation, useQueryClient } from "react-query";

const createPost = async (post) => {
  const { data } = await postsAPI.createPost(post);
  console.log(data);
  return data;
};

const AddPost = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({
      title: "두번쨰 post",
      content: "두번째 post content",
      writer: "123",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;
