import postsAPI from "apis/postsAPI";
import { POSTS_QUERY_KEYS } from "constants/queryKeys";
import { useMutation, useQueryClient } from "react-query";

const createPost = async (post) => {
  const { data } = await postsAPI.createPost(post);
  return data;
};

const useAddPostQuery = () => {
  const queryClient = useQueryClient();
  return useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(POSTS_QUERY_KEYS.posts);
    },
  });
};

export default useAddPostQuery;
