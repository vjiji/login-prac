import commentsAPI from "apis/commentsAPI";
import { useQuery } from "@tanstack/react-query";
import { COMMENTS_QUERY_KEYS } from "constants/queryKeys";

const addComment = async (id) => {
  const { data } = await commentsAPI.getComments(id);
  return data;
};

const useGetCommentsQuery = (id) => {
  return useQuery({
    queryKey: [COMMENTS_QUERY_KEYS.comments],
    queryFn: () => addComment(id),
    enabled: !!id,
  });
};

export default useGetCommentsQuery;