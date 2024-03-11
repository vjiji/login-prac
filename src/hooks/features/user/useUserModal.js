import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { _getUserInfo, resetUserState } from "../../../redux/modules/user";

const useUserModal = () => {
  const { status, error } = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoginPage = pathname === "/login";
  const isSignupPage = pathname === "/signup";

  const isModalOpen = () => {
    if (isLoginPage || isSignupPage) {
      return status === "failed" || status === "succeeded";
    } else {
      return status === "failed";
    }
  };

  const modalMessage = () => {
    if (status === "failed") return error;
    if (isLoginPage) return "로그인 성공!";
    if (isSignupPage) return "회원가입 성공!";
  };

  const handlePageRedirect = () => {
    if (status === "failed") {
      return !(isLoginPage || isSignupPage) && navigate("/login");
    } else {
      if (isLoginPage) navigate("/");
      if (isSignupPage) navigate("/login");
    }
  };

  const handleModalClose = () => {
    dispatch(resetUserState());
    handlePageRedirect();
  };

  return {
    isModalOpen: isModalOpen(),
    modalMessage: modalMessage(),
    handleModalClose: handleModalClose,
  };
};

export default useUserModal;
