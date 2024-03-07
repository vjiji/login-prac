import postsAPI from "apis/postsAPI";
import { useQuery } from "react-query";
import { POSTS_QUERY_KEYS } from "constants/queryKeys";

const getPost = async (id) => {
  const { data } = await postsAPI.getPostDetail(id);
  return data;
};

const useGetPostDetailQuery = (id, handleOnSuccess) => {
  return useQuery(POSTS_QUERY_KEYS.postDetail(id), () => getPost(id), {
    enabled: !!id,
    onSuccess: (data) => {
      handleOnSuccess && handleOnSuccess(data);
    },
  });
};

export default useGetPostDetailQuery;
