import userAPI from "apis/userAPI";
import React from "react";
import styled from "styled-components";

const Signup = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");

    try {
      const data = await userAPI.register({ id: "", password: "test" });
      console.log(data, data.data);
    } catch (error) {
      console.log(error, error.response.data);
    }
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
