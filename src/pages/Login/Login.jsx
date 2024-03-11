import styled from "styled-components";
import { useDispatch } from "react-redux";
import useLogin from "./useLogin";
import { _loginUser } from "../../redux/modules/user";
import { Link } from "react-router-dom";
import UserForm from "components/features/user/UserForm";
import Modal from "common/Modal";
import Button from "common/Button";

const Login = () => {
  const { isFailed, showModal, modalmessage, handleModalButtonClick } =
    useLogin();

  const dispatch = useDispatch();

  const handleLoginFormSubmit = (id, password) => (e) => {
    e.preventDefault();
    dispatch(_loginUser({ id, password }));
  };

  return (
    <>
      <UserForm formName="로그인" handleSubmit={handleLoginFormSubmit}>
        <LinkStyles to={"/signup"}>
          아이디가 없다면 <span>회원가입</span> 해주세요
        </LinkStyles>
      </UserForm>

      {/* {showModal && (
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
      )} */}
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
