import { COLORS, FONT_SIZE } from "constants/styleConstant";
import { useDeletePostQuery, useGetPostDetailQuery } from "hooks/postsQuery";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { formatToYYYYMMDD } from "utils";
import Comments from "./Comments";
import Button from "common/Button";

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
          <Button
            theme="worning"
            size="small"
            className="outlined"
            onClick={() => navigate(`/editPost/${postId}`)}
            style={{ color: `${COLORS.worning}` }}
          >
            수정
          </Button>
          <Button
            theme="secondary"
            size="small"
            className="outlined"
            onClick={() => deletePost(postId)}
          >
            삭제
          </Button>
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
  grid-template-rows: 35px minmax(400px, auto);
`;

const ButtonBox = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
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
