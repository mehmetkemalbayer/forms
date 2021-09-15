import { useState } from "react";

const useFormInput = (validator) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validator(value);
  const hasError = !isValid && isTouched;

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const onBlurHandler = (event) => {
    setIsTouched(true);
  };
  const onResetHandler = () => {
    setValue("");
    setIsTouched(false);
  };
  const classes = !hasError ? "form-control" : "form-control invalid";
  return {
    value,
    hasError,
    onBlurHandler,
    onChangeHandler,
    onResetHandler,
    classes,
  };
};
export default useFormInput;
