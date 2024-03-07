import { COLORS, FONT_SIZE } from "constants/styleConstant";
import { useDeletePostQuery, useGetPostDetailQuery } from "hooks/postsQuery";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { formatToYYYYMMDD } from "utils";

const PostDetail = () => {
  const { id: userId } = useSelector((state) => state.user.user);
  const { id: postId } = useParams();
  const navigate = useNavigate();

  const { data: post, error } = useGetPostDetailQuery(postId);

  const handleDeleteSuccess = () => navigate("/");
  const { mutate: deletePost } = useDeletePostQuery(handleDeleteSuccess);

  if (!post) {
    return <div>...loading</div>;
  }

  return (
    <Container>
      {userId === post.writer && (
        <ButtonBox>
          <button onClick={() => navigate(`/editPost/${postId}`)}>수정</button>
          <button onClick={() => deletePost(postId)}>삭제</button>
        </ButtonBox>
      )}
      <PostDetailLayout>
        <h1>{post.title}</h1>
        <p>{formatToYYYYMMDD(post.createdAt)}</p>
        <p>{post.content}</p>
      </PostDetailLayout>
    </Container>
  );
};

export default PostDetail;

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
const ButtonBox = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  button {
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      font-weight: 600;
    }
  }
`;

const PostDetailLayout = styled.div`
  width: 600px;
  min-height: 400px;
  margin: 0 auto;
  padding: 0 10px;
  border-radius: 2px;
  background-color: #f9f9f9;
  color: #585a59;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: ${FONT_SIZE.large};
    border-bottom: 1px solid ${COLORS.secondary};
    padding: 20px 0 10px;
  }

  p {
    line-height: 1.5;
  }
`;
