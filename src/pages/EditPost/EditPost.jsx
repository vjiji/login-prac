import Button from "common/Button";
import { COLORS, FONT_SIZE } from "constants/styleConstant";
import { useInput } from "hooks/common";
import { useEditPost, useGetPostDetail } from "hooks/features/post";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const EditPost = () => {
  const {
    value: title,
    handleValueChange: handleTitleInputChange,
    resetValue: resetTitle,
  } = useInput();
  const {
    value: content,
    handleValueChange: handleContentInputChange,
    resetValue: resetContent,
  } = useInput();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useGetPostDetail(id);
  useEffect(() => {
    if (data) {
      handleGetPostSuccess(data);
    }
  }, [data]);

  const handleGetPostSuccess = (data) => {
    resetTitle(data.title);
    resetContent(data.content);
  };

  const handleEditPostsSuccess = () => {
    navigate(`/posts/${id}`);
  };

  const { mutate: editPost } = useEditPost(handleEditPostsSuccess);

  const handleSubmit = (e) => {
    e.preventDefault();
    editPost({ id, title, content });
  };

  if (!data) return <div>...loading</div>;

  return (
    <FormStyle onSubmit={handleSubmit}>
      <Title
        placeholder="제목"
        name="title"
        value={title}
        onChange={handleTitleInputChange}
      />
      <Content
        placeholder="내용"
        name="content"
        value={content}
        onChange={handleContentInputChange}
      />
      <ButtonBox>
        <button className="addpost__cancel-button">돌아가기</button>
        <Button theme="secondary" size="large" type="submit">
          작성완료
        </Button>
      </ButtonBox>
    </FormStyle>
  );
};

export default EditPost;

const FormStyle = styled.form`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.input`
  padding-bottom: 10px;
  border: none;
  border-bottom: 1px solid ${COLORS.secondary};
  font-size: ${FONT_SIZE.large};

  &:focus {
    outline: none;
  }
`;

const Content = styled.textarea`
  height: 30vh;
  padding: 10px 4px;
  border: 1px solid ${COLORS.secondary};
  border-radius: 4px;
  font-size: ${FONT_SIZE.medium};
  resize: none;

  &:focus {
    outline: none;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .addpost__cancel-button {
    color: #9f9f9f;
    background: none;
    border: none;
    border-bottom: 1px solid #bbb;
    cursor: pointer;
  }
`;
