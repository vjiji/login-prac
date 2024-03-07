import postsAPI from "apis/postsAPI";
import { POSTS_QUERY_KEYS } from "constants/queryKeys";
import { useQuery } from "react-query";

const getPost = async () => {
  const { data } = await postsAPI.getPosts();
  return data;
};

const useGetPostsQuery = () => {
  return useQuery(POSTS_QUERY_KEYS.posts, getPost);
};

export default useGetPostsQuery;
