import { useLocation } from "react-router-dom";
import { UserForm } from "components/features/user";
import { useUserFormSubmit } from "hooks/features/user";

const Signup = () => {
  const { pathname } = useLocation();
  const { handleFormSubmit } = useUserFormSubmit(pathname);

  return (
    <>
      <UserForm formName="회원가입" handleSubmit={handleFormSubmit} />
    </>
  );
};

export default Signup;
