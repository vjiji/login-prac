import commentsAPI from "apis/commentsAPI";
import { useQuery } from "@tanstack/react-query";
import { COMMENTS_QUERY_KEYS } from "constants/queryKeys";

const getCommentDetail = async (postId, commentId) => {
  const { data } = await commentsAPI.getCommentDetail(postId, commentId);
  return data;
};

const useGetCommentDetailQuery = (postId, commentId) => {
  return useQuery({
    queryKey: [COMMENTS_QUERY_KEYS.commentDetail(commentId)],
    queryFn: () => getCommentDetail(postId, commentId),
    enabled: !!commentId,
  });
};

export default useGetCommentDetailQuery;
