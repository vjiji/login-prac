import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "common/Button";
import { useInput } from "hooks/common";
import { useAddPostQuery } from "hooks/postsQuery";
import { COLORS, FONT_SIZE } from "constants/styleConstant";

const AddPost = () => {
  const { id } = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const { value: title, handleValueChange: handleTitleInputChange } =
    useInput();
  const { value: content, handleValueChange: handleContentInputChange } =
    useInput();

  const handleAddPostsSuccess = (data) => {
    const { id } = data;
    navigate(`/posts/${id}`);
  };

  const { mutate: createPost } = useAddPostQuery(handleAddPostsSuccess);

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost({
      title,
      content,
      writer: id,
    });
  };

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

export default AddPost;

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
