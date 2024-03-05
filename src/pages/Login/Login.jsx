import React, { useEffect } from "react";
import styled from "styled-components";
import { useInput } from "hooks";
import { useSelector } from "react-redux";
import { _loginUser, _registerUser } from "../../redux/modules/user";
import { Modal } from "common/Modal";
import { Link } from "react-router-dom";
import useLogin from "./useLogin";

const Login = () => {
  const [id, onChangeIdHandler] = useInput();
  const [password, onChangePassWordHandler] = useInput();
  const { status } = useSelector((state) => state.user);

  const {
    isLoginPage,
    showModal,
    modalmessage,
    dispatch,
    handleModalOpen,
    handleModalButtonClick,
  } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    isLoginPage
      ? dispatch(_loginUser({ id, password }))
      : dispatch(_registerUser({ id, password }));
  };

  useEffect(() => {
    handleModalOpen();
  }, [status]);

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
        <button type="submit" disabled={status === "loading"}>
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
