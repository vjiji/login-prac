import styled from "styled-components";
import Button from "components/common/Button";
import { useCommentForm } from "hooks/features/comment";
import { COLORS } from "constants/styleConstant";

const CommentForm = ({ commentId, setCommentId }) => {
  const {
    userId,
    postId,
    errorMessage,
    register,
    onSubmit,
    createComment,
    updateComment,
    handleUpdateCancelClick,
  } = useCommentForm(commentId, setCommentId);

  const handleSubmit = (value) => {
    const comment = { ...value, writer: userId };
    commentId
      ? updateComment({ postId, commentId, comment })
      : createComment({ postId, comment });
  };
  return (
    <CommentFormLayout onSubmit={onSubmit(handleSubmit)}>
      <InputBox>
        <input
          {...register("content", { required: "댓글 내용을 작성해주세요" })}
        />
        {errorMessage && <p>{errorMessage}</p>}
      </InputBox>
      {commentId && (
        <Button
          theme="secondary"
          size="small"
          className="outlined"
          onClick={handleUpdateCancelClick}
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
  align-items: flex-start;
  gap: 10px;
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  min-height: 40px;

  input {
    width: 100%;
  }

  p {
    width: 100%;
    text-align: end;
    font-size: 12px;
    color: ${COLORS.worning};
  }
`;
