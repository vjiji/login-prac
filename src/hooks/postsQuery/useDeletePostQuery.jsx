import postsAPI from "apis/postsAPI";
import { useMutation, useQueryClient } from "react-query";
import { POSTS_QUERY_KEYS } from "constants/queryKeys";

const deletePost = async (id) => {
  const { data } = await postsAPI.deletePost(id);
  return data;
};

const useDeletePostQuery = (handleOnSuccess) => {
  const queryClient = useQueryClient();
  return useMutation((id) => deletePost(id), {
    onSuccess: () => {
      handleOnSuccess && handleOnSuccess();
      // queryClient.invalidateQueries(POSTS_QUERY_KEYS.posts);
    },
  });
};

export default useDeletePostQuery;
