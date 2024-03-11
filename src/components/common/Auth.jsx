import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { OneButtonModal } from "common/Modal";
import { _getUserInfo } from "../../redux/modules/user";
import Cookies from "js-cookie";
import { useUserModal } from "hooks/features/user";

const Auth = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isModalOpen, modalMessage, handleModalClose } = useUserModal();

  useEffect(() => {
    if (!user.id) {
      const token = Cookies.get("token");
      token ? dispatch(_getUserInfo()) : navigate("/login");
    }
  }, [user]);

  return (
    <OneButtonModal
      onModal={isModalOpen}
      message={modalMessage}
      handleButtonClick={handleModalClose}
    />
  );
};

export default Auth;
