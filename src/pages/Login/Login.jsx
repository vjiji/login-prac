import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useInput } from "hooks";
import useLogin from "./useLogin";
import { _loginUser, _registerUser } from "../../redux/modules/user";
import Modal from "common/Modal";
import Button from "common/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [id, onChangeIdHandler, resetIdValue] = useInput();
  const [password, onChangePassWordHandler, resetPasswordValue] = useInput();
  const {
    isLoginPage,
    isLoading,
    isFailed,
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
    <LoginLayout>
      <p className="login--title">{isLoginPage ? "로그인" : "회원가입"}</p>
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
            type="password"
            name="password"
            value={password}
            onChange={onChangePassWordHandler}
          />
        </InputBox>
        <ButtonBox>
          <Button
            theme="secondary"
            size="large"
            type="submit"
            disabled={isLoading}
          >
            {isLoginPage ? "로그인" : "회원가입"}
          </Button>
        </ButtonBox>
        {isLoginPage && (
          <LinkStyles to={"/signup"}>
            아이디가 없다면 <span>회원가입</span> 해주세요
          </LinkStyles>
        )}
      </FormBox>
      {showModal && (
        <Modal handleClose={handleModalButtonClick}>
          <ModalContent>
            <p>{modalmessage}</p>
            <Button
              onClick={handleModalButtonClick}
              size="large"
              theme={isFailed ? "worning" : "secondary"}
              className={isFailed && "outlined"}
            >
              확인
            </Button>
          </ModalContent>
        </Modal>
      )}
    </LoginLayout>
  );
};

export default Login;

const LoginLayout = styled.div`
  height: 280px;
  padding: 20px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: fit-content;
  border: 2px solid #a3aabe;
  border-radius: 4px;

  .login--title {
    font-weight: 500;
  }
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  p {
    width: 120px;
  }
`;

const ButtonBox = styled.div`
  width: fit-content;
  margin: 30px auto 0;
`;

const LinkStyles = styled(Link)`
  color: #000;
  text-decoration: none;
  margin: 10px auto;

  span {
    color: #0000ff;
    font-weight: 500;
    text-decoration: underline;
  }
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
  align-items: center;
  z-index: 2;
`;
