import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { resetUserState } from "../../../redux/modules/user";

const useUserModal = () => {
  const { status, error } = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoginPage = pathname === "/login";
  const isSignupPage = pathname === "/signup";
  const isLoginUser = !(isLoginPage || isSignupPage);

  const isModalOpen = () => {
    if (!isLoginUser) {
      return status === "failed" || status === "succeeded";
    } else {
      return status === "failed";
    }
  };

  const modalMessage = () => {
    if (status === "failed")
      return `${error} 
    
      ${isLoginUser ? "다시 로그인 해주세요!" : ""}`;

    if (isLoginPage) return "로그인 성공!";
    if (isSignupPage) return "회원가입 성공!";
  };

  const handlePageRedirect = () => {
    if (status === "failed") {
      return isLoginUser && navigate("/login");
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
    theme: status === "failed" ? "worning" : "secondary",
    className: status === "failed" && "outlined",
    handleModalClose: handleModalClose,
  };
};

export default useUserModal;
