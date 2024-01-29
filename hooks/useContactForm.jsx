import { useState } from "react";

const useContactForm = () => {
  const [values, setValues] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    setValues((prevState) => {
      return {
        ...values,
        [e.target.id]: e.target.value,
      };
    });
  };
  return {
    values,
    handleChange,
  };
};

export default useContactForm;
