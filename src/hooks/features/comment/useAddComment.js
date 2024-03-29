import commentsAPI from "apis/commentsAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { COMMENTS_QUERY_KEYS } from "constants/queryKeys";

const createComment = async ({ postId, comment }) => {
  const { data } = await commentsAPI.createComment(postId, comment);
  return data;
};

const useAddComment = (onSuccess) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      onSuccess();
      queryClient.invalidateQueries(COMMENTS_QUERY_KEYS.comments);
    },
  });
};

export default useAddComment;
