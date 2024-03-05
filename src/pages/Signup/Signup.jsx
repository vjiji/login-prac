import React from "react";
import styled from "styled-components";
import { useInput } from "hooks";
import { useDispatch, useSelector } from "react-redux";
import { _registerUser } from "../../redux/modules/user";

const Signup = () => {
  const [id, onChangeIdHandler] = useInput();
  const [password, onChangePassWordHandler] = useInput();
  const { status, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(_registerUser({ id, password }));
  };

  return (
    <SignupLayout>
      <p>회원가입 페이지</p>
      <FormBox onSubmit={handleSubmit}>
        <InputBox>
          <p>아이디</p>
          <input
            type="text"
            name="id"
            value={id}
            onChange={onChangeIdHandler}
          />
        </InputBox>
        <InputBox>
          <p>비밀번호</p>
          <input
            type="text"
            name="password"
            value={password}
            onChange={onChangePassWordHandler}
          />
        </InputBox>
        <button type="submit" disabled={status === "loading"}>
          회원가입
        </button>
      </FormBox>
    </SignupLayout>
  );
};

export default Signup;

const SignupLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputBox = styled.div`
  display: flex;
`;
