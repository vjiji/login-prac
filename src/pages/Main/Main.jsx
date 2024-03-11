import { COLORS, FONT_SIZE } from "constants/styleConstant";
import { useGetPosts } from "hooks/features/post";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { formatToYYYYMMDD } from "utils";

const Main = () => {
  const { data: posts, error, isLoading } = useGetPosts();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <MainContainer>
      {posts.map(({ id, title, writer, createdAt }) => (
        <PostBox key={id} to={`/posts/${id}`}>
          <TitleBox>
            <h1>{title}</h1>
            <p>{writer}</p>
          </TitleBox>
          <p className="main__date-text">{formatToYYYYMMDD(createdAt)}</p>
        </PostBox>
      ))}
      <NewPostButton onClick={() => navigate("/newpost")}>
        글 작성
      </NewPostButton>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

const PostBox = styled(Link)`
  padding: 10px;
  border-bottom: 1px solid ${COLORS.secondary};
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: #333;
  .main__date-text {
    font-size: ${FONT_SIZE.small};
  }
`;

const TitleBox = styled.div`
  font-size: ${FONT_SIZE.medium};

  h1 {
    ${PostBox}:hover & {
      color: ${COLORS.primary};
    }
  }

  p {
    font-size: ${FONT_SIZE.small};
    margin-top: 40px;
    color: #aaa;
  }
`;

const NewPostButton = styled.button`
  background-color: #29abe2;
  width: 60px;
  height: 40px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 150px;
  right: 40px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #218abe;
  }
`;
