import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { resetUserState } from "../../redux/modules/user";

const useLogin = () => {
  const [showModal, setShowModal] = useState(false);
  const { status, user, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    handleModalOpen();
  }, [status]);

  const { pathname } = useLocation();
  const isLoginPage = pathname === "/login";

  const handleModalOpen = () => {
    status === "failed" || status === "succeeded"
      ? setShowModal(true)
      : setShowModal(false);
  };

  const handleModalButtonClick = () => {
    console.log("rewrwerwe");
    if (status === "succeeded") {
      isLoginPage ? navigate("/") : navigate("/login");
    }
    dispatch(resetUserState());
  };

  const modalmessage =
    status === "failed"
      ? error
      : `${isLoginPage ? "로그인" : "회원가입"} 성공!`;

  useEffect(() => {
    if (user.id) navigate("/");
  }, []);

  return {
    isLoginPage,
    isLoading: status === "loading",
    isFailed: status === "failed",
    showModal,
    modalmessage,
    handleModalButtonClick,
  };
};

export default useLogin;
