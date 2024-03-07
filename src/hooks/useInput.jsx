import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");

  const handler = (e) => {
    setValue(e.target.value);
  };

  const resetValue = (value = "") => {
    setValue(value);
  };

  return [value, handler, resetValue];
};

export default useInput;
