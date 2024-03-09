import styled from "styled-components";
import CommentForm from "../CommentForm";
import { COLORS } from "constants/styleConstant";
import RenderComments from "../RenderComments";
import useComments from "./useComments";

const Comments = () => {
  const { comments, commentId, setCommentId } = useComments();

  return (
    <CommentsLayout>
      <h1>Comments</h1>
      <RenderComments comments={comments} setCommentId={setCommentId} />
      <CommentForm
        commentId={commentId}
        setCommentId={setCommentId}
        // content={content}
        // handleContentChange={handleContentChange}
        // resetContent={resetContent}
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
