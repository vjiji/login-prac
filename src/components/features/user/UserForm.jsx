import styled from "styled-components";
import Button from "components/common/Button";
import { useUserForm } from "hooks/features/user";
import { COLORS } from "constants/styleConstant";

const UserForm = ({ currentPage, children }) => {
  const { formName, register, handleSubmit, errors, isLoading } =
    useUserForm(currentPage);

  return (
    <LoginLayout>
      <h1 className="user-form__name-text">{formName}</h1>
      <FormBox onSubmit={handleSubmit}>
        <InputBox>
          <InputWrap>
            <h1>아이디</h1>
            <input
              {...register("id", {
                required: "아이디를 입력해주세요",
                pattern: {
                  value: /^[가-힣a-zA-Z0-9]{4,8}$/,
                  message: "아이디는 4-8글자를 입력해주세요",
                },
              })}
            />
          </InputWrap>
          {errors?.id && <p>{errors.id.message}</p>}
        </InputBox>
        <InputBox>
          <InputWrap>
            <h1>비밀번호</h1>
            <input
              {...register("password", {
                required: "비밀번호를 입력해주세요",
                minLength: {
                  value: 6,
                  message: "비밀번호는 6~10글자를 사용해주세요",
                },
                maxLength: {
                  value: 10,
                  message: "비밀번호는 6~10글자를 사용해주세요",
                },
              })}
              type="password"
            />
          </InputWrap>
          {errors?.password && <p>{errors.password.message}</p>}
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
  height: 310px;
  padding: 20px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: fit-content;
  border: 2px solid #a3aabe;
  border-radius: 4px;

  .user-form__name-text {
    font-size: 18px;
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
  flex-direction: column;
  align-items: center;
  gap: 5px;
  min-height: 40px;

  p {
    width: 100%;
    text-align: end;
    font-size: 12px;
    color: ${COLORS.worning};
  }
`;

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    width: 100px;
  }
`;

const ButtonBox = styled.div`
  width: fit-content;
  margin: 30px auto 0;
`;
