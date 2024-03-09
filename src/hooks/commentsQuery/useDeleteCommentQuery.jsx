import commentsAPI from "apis/commentsAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { COMMENTS_QUERY_KEYS } from "constants/queryKeys";

const deleteComment = async ({ postId, id }) => {
  const { data } = await commentsAPI.deleteComment(postId, id);

  return data;
};

const useDeleteCommentQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries(COMMENTS_QUERY_KEYS.comments);
    },
  });
};

export default useDeleteCommentQuery;
