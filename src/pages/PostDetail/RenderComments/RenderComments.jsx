import { FONT_SIZE } from "constants/styleConstant";
import React, { memo } from "react";
import styled from "styled-components";

const RenderComments = memo(
  ({ postId, comments, setCommentId, deleteComment }) => {
    return (
      <CommentBoxWrap>
        {comments &&
          comments.map(({ content, writer, id }) => {
            return (
              <CommentBox key={id}>
                <TextBox>
                  <p className="comments__writer-text">{writer}</p>
                  <p>{content}</p>
                </TextBox>
                <IconBox>
                  <button onClick={() => setCommentId(id)}>edit</button>
                  <button onClick={() => deleteComment({ postId, id })}>
                    x
                  </button>
                </IconBox>
              </CommentBox>
            );
          })}
      </CommentBoxWrap>
    );
  }
);

export default RenderComments;

const CommentBoxWrap = styled.div`
  height: 360px;
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

const IconBox = styled.div``;
