import { useEffect } from "react";
import { useInput } from "hooks";
import { useSelector } from "react-redux";

const useUserForm = (formName) => {
  const { status } = useSelector((state) => state.user);
  const [id, onChangeIdHandler, resetIdValue] = useInput();
  const [password, onChangePassWordHandler, resetPasswordValue] = useInput();

  useEffect(() => {
    resetIdValue();
    resetPasswordValue();
  }, [formName]);

  return {
    id,
    password,
    isLoading: status === "loading",
    onChangeIdHandler,
    onChangePassWordHandler,
  };
};

export default useUserForm;
