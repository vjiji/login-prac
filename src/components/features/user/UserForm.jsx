import styled from "styled-components";
import Button from "common/Button";
import { useUserForm } from "hooks/features/user";

const UserForm = ({ formName, handleSubmit, children }) => {
  const { id, password, isLoading, handleIdChange, handlePasswordChange } =
    useUserForm(formName);

  return (
    <LoginLayout>
      <p className="user-form__name-text">{formName}</p>
      <FormBox onSubmit={handleSubmit(id, password)}>
        <InputBox>
          <p>아이디</p>
          <input type="text" name="id" value={id} onChange={handleIdChange} />
        </InputBox>
        <InputBox>
          <p>비밀번호</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </InputBox>
        <ButtonBox>
          <Button
            theme="secondary"
            size="large"
            type="submit"
            disabled={isLoading}
          >
            {formName}
          </Button>
        </ButtonBox>
        {children}
      </FormBox>
    </LoginLayout>
  );
};

export default UserForm;

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

  .user-form__name-text {
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
