import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { OneButtonModal } from "./Modal";
import { getUserInfo } from "../../redux/modules/user";
import Cookies from "js-cookie";
import { useUserModal } from "hooks/features/user";

const Auth = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { isModalOpen, modalMessage, theme, className, handleModalClose } =
    useUserModal();

  const isMemberOnlyPage = !(pathname === "/login" || pathname === "signup");

  useEffect(() => {
    if (!isMemberOnlyPage) {
      user.id && navigate("/");
    }
  }, [isMemberOnlyPage]);

  useEffect(() => {
    if (!user.id) {
      const token = Cookies.get("token");
      token ? dispatch(getUserInfo()) : navigate("/login");
    }
  }, [user]);

  return (
    <OneButtonModal
      onModal={isModalOpen}
      message={modalMessage}
      theme={theme}
      className={className}
      handleButtonClick={handleModalClose}
    />
  );
};

export default Auth;
