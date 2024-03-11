import postsAPI from "apis/postsAPI";
import { POSTS_QUERY_KEYS } from "constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const createPost = async (post) => {
  const { data } = await postsAPI.createPost(post);
  return data;
};

const useCreatePost = (handleOnSuccess) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      handleOnSuccess && handleOnSuccess(data);
      queryClient.invalidateQueries(POSTS_QUERY_KEYS.posts);
    },
  });
};

export default useCreatePost;
