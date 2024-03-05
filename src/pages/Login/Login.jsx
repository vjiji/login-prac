import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  return (
    <LoginLayout>
      <div>
        아이디: <input />
        비밀번호: <input />
        <button>로그인</button>
      </div>
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
