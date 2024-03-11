import postsAPI from "apis/postsAPI";
import { POSTS_QUERY_KEYS } from "constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

const getPost = async () => {
  const { data } = await postsAPI.getPosts();
  return data;
};

const useGetPosts = () => {
  return useQuery({ queryKey: [POSTS_QUERY_KEYS.posts], queryFn: getPost });
};

export default useGetPosts;
