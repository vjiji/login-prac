import React from "react";
import { Link } from "react-router-dom";
import { _loginUser } from "../../redux/modules/user";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const { status, error, user } = useSelector((state) => state.user);

  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(_loginUser({ id: "test33", password: "test33" }));
  };

  return (
    <LoginLayout>
      <form onSubmit={handleSubmit}>
        아이디: <input />
        비밀번호: <input />
        <button type="submit">로그인</button>
      </form>
      <Test>
        <Link to={"/signup"}>회원가입</Link>
      </Test>
    </LoginLayout>
  );
};

export default Login;

const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Test = styled.div`
  display: inline-block;
`;
