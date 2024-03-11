import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { UserForm } from "components/features/user";
import { useUserFormSubmit } from "hooks/features/user";

const Login = () => {
  const { pathname } = useLocation();
  const { handleFormSubmit } = useUserFormSubmit(pathname);

  return (
    <>
      <UserForm formName="로그인" handleSubmit={handleFormSubmit}>
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
