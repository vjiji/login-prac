import React from "react";
import styled from "styled-components";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <SignupLayout>
      <p>회원가입 페이지</p>
      <FormBox onSubmit={handleSubmit}>
        <InputBox>
          <p>아이디</p>
          <input />
        </InputBox>
        <InputBox>
          <p>비밀번호</p>
          <input />
        </InputBox>
        <button>회원가입</button>
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
