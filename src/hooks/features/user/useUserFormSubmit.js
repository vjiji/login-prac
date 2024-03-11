import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../../../redux/modules/user";

const useUserFormSubmit = (currentPage) => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.id) navigate("/");
  }, []);

  const handleFormSubmit = (id, password) => (e) => {
    e.preventDefault();
    if (currentPage === "/signup") {
      dispatch(registerUser({ id, password }));
    }
    if (currentPage === "/login") {
      dispatch(loginUser({ id, password }));
    }
  };

  return {
    handleFormSubmit,
  };
};

export default useUserFormSubmit;
