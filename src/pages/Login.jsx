import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { UserForm } from "components/features/user";

const Login = () => {
  const { pathname } = useLocation();

  return (
    <>
      <UserForm currentPage={pathname}>
        <LinkStyles to={"/signup"}>
          아이디가 없다면 <span>회원가입</span> 해주세요
        </LinkStyles>
      </UserForm>
    </>
  );
};

export default Login;

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
