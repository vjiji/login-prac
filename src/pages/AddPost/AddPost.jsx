import postsAPI from "apis/postsAPI";
import Button from "common/Button";
import { useInput } from "hooks";
import { useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONT_SIZE } from "styles/styleConstant";

const createPost = async (post) => {
  const { data } = await postsAPI.createPost(post);
  return data;
};

const AddPost = () => {
  const { id } = useSelector((state) => state.user.user);
  const [title, handleTitleInputChange, resetTitle] = useInput();
  const [content, handleContentInputChange, resetContent] = useInput();
  const navigate = useNavigate();
  //

  const queryClient = useQueryClient();
  const { mutate } = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({
      title,
      content,
      writer: id,
    });
    resetTitle();
    resetContent();
    // navigate()
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
        <Button size="large" type="submit">
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
  border-bottom: 1px solid ${COLORS.primary};
  font-size: ${FONT_SIZE.large};

  &:focus {
    outline: none;
  }
`;

const Content = styled.textarea`
  height: 30vh;
  padding: 10px 4px;
  border: 2px solid ${COLORS.primary};
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
