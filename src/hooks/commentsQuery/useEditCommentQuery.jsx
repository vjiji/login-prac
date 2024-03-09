import commentsAPI from "apis/commentsAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { COMMENTS_QUERY_KEYS } from "constants/queryKeys";

const updateComment = async ({ postId, commentId, comment }) => {
  const { data } = await commentsAPI.updateComment(postId, commentId, comment);
  return data;
};

const useEditCommentQuery = (onSuccess) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateComment,
    onSuccess: () => {
      queryClient.invalidateQueries(COMMENTS_QUERY_KEYS.comments);
      onSuccess();
    },
  });
};

export default useEditCommentQuery;
