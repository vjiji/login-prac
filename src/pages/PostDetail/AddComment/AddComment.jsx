import Button from "common/Button";
import { useInput } from "hooks";
import { useAddCommentQuery } from "hooks/commentsQuery";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const AddComment = () => {
  const { id: userId } = useSelector((state) => state.user.user);
  const { id: postId } = useParams();
  const [content, handleContentChange, resetContent] = useInput();

  const handleOnAddSuccess = () => {
    resetContent();
  };

  const { mutate: createComment } = useAddCommentQuery(handleOnAddSuccess);

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = { content, writer: userId };
    createComment({ postId, comment });
  };

  return (
    <AddCommentLayout onSubmit={handleSubmit}>
      <input value={content} onChange={handleContentChange} />
      <Button theme="secondary" size="small" type="submit" className="outlined">
        작성
      </Button>
    </AddCommentLayout>
  );
};

export default AddComment;

const AddCommentLayout = styled.form`
  height: 40px;
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    width: 100%;
  }
`;
