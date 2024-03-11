import Button from "components/common/Button";
import { COLORS, FONT_SIZE } from "constants/styleConstant";
import React from "react";
import styled from "styled-components";

const PostForm = ({
  register,
  titleErrorMessage,
  buttonName,
  handleSubmit,
}) => {
  return (
    <FormStyle onSubmit={handleSubmit}>
      <Title
        {...register("title", { required: "제목을 입력해주세요" })}
        placeholder="제목"
      />
      {titleErrorMessage && <p>{titleErrorMessage}</p>}
      <Content {...register("content")} placeholder="내용" />
      <ButtonBox>
        <button className="addpost__cancel-button">돌아가기</button>
        <Button theme="secondary" size="large" type="submit">
          {buttonName}
        </Button>
      </ButtonBox>
    </FormStyle>
  );
};

export default PostForm;

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
  height: 400px;
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
