import { COLORS, FONT_SIZE } from "constants/styleConstant";
import { useGetPostsQuery } from "hooks/postsQuery";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatToYYYYMMDD } from "utils";

const Main = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();

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
