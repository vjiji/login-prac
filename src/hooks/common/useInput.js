import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const resetValue = (value = "") => {
    setValue(value);
  };

  return { value, handleValueChange, resetValue };
};

export default useInput;
