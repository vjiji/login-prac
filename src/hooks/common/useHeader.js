import { useSelector } from "react-redux";
import Cookies from "js-cookie";

const useHeader = () => {
  const { user } = useSelector((state) => state.user);
  const userId = user.id;

  const logout = () => {
    Cookies.remove("token");
    window.location.reload();
  };

  return { userId, logout };
};

export default useHeader;
