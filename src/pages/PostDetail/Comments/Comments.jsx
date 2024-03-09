import styled from "styled-components";
import RenderComments from "../RenderComments";
import CommentForm from "../CommentForm";
import { TwoButtonModal } from "common/Modal";
import useComments from "./useComments";
import { COLORS } from "constants/styleConstant";

const Comments = () => {
  const {
    comments,
    editCommentId,
    deleteCommentId,
    setEditCommentId,
    setDeleteCommentId,
    handleCommentDelete,
  } = useComments();

  return (
    <CommentsLayout>
      <h1>Comments</h1>
      <RenderComments
        comments={comments}
        setEditCommentId={setEditCommentId}
        setDeleteCommentId={setDeleteCommentId}
      />
      <CommentForm commentId={editCommentId} setCommentId={setEditCommentId} />
      <TwoButtonModal
        onModal={deleteCommentId}
        message="댓글을 삭제하시겠어요?"
        handleConfirmButtonClick={handleCommentDelete}
        handleModalClose={() => setDeleteCommentId(null)}
      />
    </CommentsLayout>
  );
};

export default Comments;

const CommentsLayout = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  padding: 20px 10px 0;
  border: 1px solid #ddd;
  border-radius: 12px;
  height: fit-content;

  h1 {
    color: ${COLORS.secondary};
    font-weight: 600;
  }
`;
