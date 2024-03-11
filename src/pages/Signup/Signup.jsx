import UserForm from "components/features/user/UserForm";
import React from "react";
import { useDispatch } from "react-redux";
import { _registerUser } from "../../redux/modules/user";
import styled from "styled-components";

const Signup = () => {
  const dispatch = useDispatch();
  const handleSignupFormSubmit = (id, password) => (e) => {
    e.preventDefault();
    dispatch(_registerUser({ id, password }));
  };

  return (
    <>
      <UserForm formName="회원가입" handleSubmit={handleSignupFormSubmit} />
      <div>modal</div>
    </>
  );
};

export default Signup;

const SignupLayout = styled.div``;
