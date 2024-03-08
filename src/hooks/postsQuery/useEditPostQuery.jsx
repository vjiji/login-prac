import postsAPI from "apis/postsAPI";
import { POSTS_QUERY_KEYS } from "constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updatePost = async (post) => {
  const { data } = await postsAPI.updatePost(post);
  return data;
};

const useEditPostQuery = (handleOnSuccess) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (post) => updatePost(post),
    onSuccess: (resData) => {
      handleOnSuccess && handleOnSuccess();
      queryClient.invalidateQueries(POSTS_QUERY_KEYS.postDetail(resData.id));
    },
  });

  return <div>useEditPostQuery</div>;
};

export default useEditPostQuery;
