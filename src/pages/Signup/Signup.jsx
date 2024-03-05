import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useInput } from "hooks";
import { useDispatch, useSelector } from "react-redux";
import { _registerUser } from "../../redux/modules/user";
import { Modal } from "common/Modal";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [id, onChangeIdHandler] = useInput();
  const [password, onChangePassWordHandler] = useInput();
  const [showModal, setShowModal] = useState(false);

  const { status, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(_registerUser({ id, password }));
  };

  useEffect(() => {
    if (status === "failed" || status === "succeeded") {
      setShowModal(true);
    }
  }, [status]);

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
      {showModal && (
        <Modal handleClose={() => setShowModal(false)}>
          <ModalContent>
            <p>{status === "succeeded" ? "회원가입 완료!" : error}</p>
            <button
              onClick={() =>
                status === "succeeded"
                  ? navigate("/login")
                  : setShowModal(false)
              }
            >
              확인
            </button>
          </ModalContent>
        </Modal>
      )}
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
