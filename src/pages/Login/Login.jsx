import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useInput } from "hooks";
import useLogin from "./useLogin";
import { _loginUser, _registerUser } from "../../redux/modules/user";
import { Modal } from "common/Modal";
import { Link } from "react-router-dom";

const Login = () => {
  const [id, onChangeIdHandler, resetIdValue] = useInput();
  const [password, onChangePassWordHandler, resetPasswordValue] = useInput();
  const {
    isLoginPage,
    isLoading,
    showModal,
    modalmessage,
    handleModalButtonClick,
  } = useLogin();

  const dispatch = useDispatch();

  useEffect(() => {
    resetIdValue();
    resetPasswordValue();
  }, [isLoginPage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    isLoginPage
      ? dispatch(_loginUser({ id, password }))
      : dispatch(_registerUser({ id, password }));
  };

  return (
    <SignupLayout>
      <p>{isLoginPage ? "로그인" : "회원가입"} 페이지</p>
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
        <button type="submit" disabled={isLoading}>
          {isLoginPage ? "로그인" : "회원가입"}
        </button>
      </FormBox>
      {showModal && (
        <Modal handleClose={handleModalButtonClick}>
          <ModalContent>
            <p>{modalmessage}</p>
            <button onClick={handleModalButtonClick}>확인</button>
          </ModalContent>
        </Modal>
      )}
      {isLoginPage && <Link to={"/signup"}>회원가입</Link>}
    </SignupLayout>
  );
};

export default Login;

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

const ModalContent = styled.div`
  padding: 24px;
  border-radius: 12px;
  background-color: #fff;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
`;
