import { useInput } from "hooks/common";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useUserForm = (formName) => {
  const { status } = useSelector((state) => state.user);
  const {
    value: id,
    handleValueChange: handleIdChange,
    resetValue: resetId,
  } = useInput();

  const {
    value: password,
    handleValueChange: handlePasswordChange,
    resetValue: resetPassword,
  } = useInput();

  useEffect(() => {
    resetId();
    resetPassword();
  }, [formName]);

  return {
    id,
    password,
    isLoading: status === "loading",
    handleIdChange,
    handlePasswordChange,
  };
};

export default useUserForm;
