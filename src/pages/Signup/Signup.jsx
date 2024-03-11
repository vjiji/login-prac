import UserForm from "components/features/user/UserForm";
import useUserFormSubmit from "hooks/features/user/useUserFormSubmit";
import { useLocation } from "react-router-dom";

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
