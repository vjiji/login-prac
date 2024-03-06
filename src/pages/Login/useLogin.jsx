import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { resetUserState } from "../../redux/modules/user";

const useLogin = () => {
  const [showModal, setShowModal] = useState(false);
  const { status, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    handleModalOpen();
  }, [status]);

  const { pathname } = useLocation();
  const isLoginPage = pathname === "/login";
  const isLoading = status === "loading";

  const handleModalOpen = () => {
    status === "failed" || status === "succeeded"
      ? setShowModal(true)
      : setShowModal(false);
  };

  const handleModalButtonClick = () => {
    if (status === "succeeded") {
      isLoginPage ? navigate("/") : navigate("/login");
    }
    dispatch(resetUserState());
  };

  const modalmessage =
    status === "failed"
      ? error
      : `${isLoginPage ? "로그인" : "회원가입"} 성공!`;

  return {
    isLoginPage,
    isLoading,
    showModal,
    modalmessage,
    handleModalButtonClick,
  };
};

export default useLogin;
