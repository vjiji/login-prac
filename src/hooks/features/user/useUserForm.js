import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { loginUser, registerUser } from "../../../redux/modules/user";

const useUserForm = (currentPage) => {
  const { status } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit", defaultValues: { id: "", password: "" } });

  const onSubmit = (formValue) => {
    if (currentPage === "/signup") {
      dispatch(registerUser(formValue));
    }
    if (currentPage === "/login") {
      dispatch(loginUser(formValue));
    }
  };

  return {
    formName: currentPage === "/login" ? "로그인" : "회원가입",
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isLoading: status === "loading",
  };
};

export default useUserForm;
