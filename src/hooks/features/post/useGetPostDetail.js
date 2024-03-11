import postsAPI from "apis/postsAPI";
import { useQuery } from "@tanstack/react-query";
import { POSTS_QUERY_KEYS } from "constants/queryKeys";

const getPost = async (id) => {
  const { data } = await postsAPI.getPostDetail(id);
  return data;
};

const useGetPostDetail = (id) => {
  return useQuery({
    queryKey: [POSTS_QUERY_KEYS.postDetail(id)],
    queryFn: () => getPost(id),
    enabled: !!id,
  });
};

export default useGetPostDetail;
