import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useGetCommentsQuery } from "hooks/commentsQuery";
import { COLORS, FONT_SIZE } from "constants/styleConstant";
import AddComment from "../AddComment";

const Comments = () => {
  const { id: postId } = useParams();
  const { data: comments } = useGetCommentsQuery(postId);

  return (
    <CommentsLayout>
      <h1>Comments</h1>
      <CommentBoxWrap>
        {comments &&
          comments.map(({ content, writer, id }) => (
            <CommentBox key={id}>
              <TextBox>
                <p className="comments__writer-text">{writer}</p>
                <p>{content}</p>
              </TextBox>
              <button>x</button>
            </CommentBox>
          ))}
      </CommentBoxWrap>
      <AddComment />
    </CommentsLayout>
  );
};

export default Comments;

const CommentsLayout = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  padding: 20px 10px 0;
  border: 1px solid #ddd;
  border-radius: 12px;
  height: fit-content;

  h1 {
    color: ${COLORS.secondary};
    font-weight: 600;
  }
`;

const CommentBoxWrap = styled.div`
  max-height: 344px;
  overflow: scroll;
`;

const CommentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  padding: 0px 2px;
  margin-top: 8px;

  &:hover {
    background: rgba(4, 55, 242, 0.2);
  }

  button {
    cursor: pointer;
  }
`;

const TextBox = styled.div`
  display: flex;
  gap: 10px;

  p {
    font-size: ${FONT_SIZE.small};
    color: #48494b;
  }

  .comments__writer-text {
    width: 80px;
  }
`;
