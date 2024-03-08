import postsAPI from "apis/postsAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { POSTS_QUERY_KEYS } from "constants/queryKeys";

const deletePost = async (id) => {
  const { data } = await postsAPI.deletePost(id);
  return data;
};

const useDeletePostQuery = (handleOnSuccess) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: () => {
      handleOnSuccess && handleOnSuccess();
      queryClient.invalidateQueries(POSTS_QUERY_KEYS.posts);
    },
  });
};

export default useDeletePostQuery;
