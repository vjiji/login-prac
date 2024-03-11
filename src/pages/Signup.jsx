import { useLocation } from "react-router-dom";
import { UserForm } from "components/features/user";

const Signup = () => {
  const { pathname } = useLocation();

  return <UserForm currentPage={pathname} />;
};

export default Signup;
