import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { setStatus } from "../../redux/modules/user";

const useLogin = () => {
  const [showModal, setShowModal] = useState(false);
  const { status, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const isLoginPage = pathname === "/login";

  const handleModalOpen = () => {
    status === "failed" || status === "succeeded"
      ? setShowModal(true)
      : setShowModal(false);
  };

  const handleModalButtonClick = () => {
    if (status === "succeeded") {
      isLoginPage ? navigate("/") : navigate("/login");
    }
    setShowModal(false);
    dispatch(setStatus("idle"));
  };

  const modalmessage =
    status === "failed"
      ? error
      : `${isLoginPage ? "로그인" : "회원가입"} 성공!`;

  return {
    isLoginPage,
    showModal,
    modalmessage,
    dispatch,
    handleModalOpen,
    handleModalButtonClick,
  };
};

export default useLogin;
