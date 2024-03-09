import React, { memo } from "react";
import styled from "styled-components";
import { FONT_SIZE } from "constants/styleConstant";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector } from "react-redux";

const RenderComments = memo(
  ({ comments, setEditCommentId, setDeleteCommentId }) => {
    const { id: userId } = useSelector((state) => state.user.user);

    return (
      <>
        <CommentBoxWrap>
          {comments &&
            comments.map(({ content, writer, id }) => {
              return (
                <CommentBox key={id}>
                  <TextBox>
                    <p className="comments__writer-text">{writer}</p>
                    <p>{content}</p>
                  </TextBox>
                  {writer === userId && (
                    <IconBox>
                      <CiEdit
                        className="comment__edit-icon"
                        onClick={() => setEditCommentId(id)}
                      />
                      <AiOutlineDelete
                        className="comment__delete-icon"
                        onClick={() => setDeleteCommentId(id)}
                      />
                    </IconBox>
                  )}
                </CommentBox>
              );
            })}
        </CommentBoxWrap>
      </>
    );
  }
);

export default RenderComments;

const CommentBoxWrap = styled.div`
  height: 360px;
  overflow: scroll;
`;

const CommentBox = styled.div`
  height: 18px;
  margin-top: 8px;
  padding: 0 2px 0 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;

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

const IconBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    cursor: pointer;
    &:hover {
      color: red;
    }
  }

  .comment__edit-icon {
    font-size: 18px;
  }
`;
