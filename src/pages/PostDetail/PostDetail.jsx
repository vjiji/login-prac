import { COLORS, FONT_SIZE } from "constants/styleConstant";
import { useDeletePostQuery, useGetPostDetailQuery } from "hooks/postsQuery";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { formatToYYYYMMDD } from "utils";
import Comments from "./Comments";

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
    <PostDetailLayout>
      {userId === post.writer && (
        <ButtonBox>
          <button onClick={() => navigate(`/editPost/${postId}`)}>수정</button>
          <button onClick={() => deletePost(postId)}>삭제</button>
        </ButtonBox>
      )}
      <PostBox>
        <h1>{post.title}</h1>
        <p>{formatToYYYYMMDD(post.createdAt)}</p>
        <p>{post.content}</p>
      </PostBox>
      <Comments />
    </PostDetailLayout>
  );
};

export default PostDetail;

const PostDetailLayout = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 2fr;
  column-gap: 20px;
  grid-template-rows: 20px minmax(400px, auto);
`;

const ButtonBox = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  padding: 0 10px;
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

const PostBox = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
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
