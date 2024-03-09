import styled from "styled-components";
import Button from "common/Button";
import useCommentForm from "./useCommentForm";

const CommentForm = ({ commentId, setCommentId }) => {
  const {
    content,
    userId,
    postId,
    handleContentChange,
    createComment,
    updateComment,
    handleOnUpdateSuccess,
  } = useCommentForm(commentId, setCommentId);

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = { content, writer: userId };
    commentId
      ? updateComment({ postId, commentId, comment })
      : createComment({ postId, comment });
  };
  return (
    <CommentFormLayout onSubmit={handleSubmit}>
      <input value={content} onChange={handleContentChange} />
      {commentId && (
        <Button
          theme="secondary"
          size="small"
          className="outlined"
          onClick={handleOnUpdateSuccess}
        >
          취소
        </Button>
      )}
      <Button theme="secondary" size="small" type="submit">
        작성
      </Button>
    </CommentFormLayout>
  );
};

export default CommentForm;

const CommentFormLayout = styled.form`
  height: 40px;
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    width: 100%;
  }
`;
