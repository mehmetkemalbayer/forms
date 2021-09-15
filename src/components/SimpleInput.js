import useInput from "./hooks/use-input";
const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInputHandler,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInputHandler,
  } = useInput((value) => value.includes("@"));

  let formIsValid = !nameInputHasError && !emailInputHasError;

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    resetNameInputHandler();
    resetEmailInputHandler();
    if (nameInputHasError) return;
  };

  const nameInputClasses = !nameInputHasError
    ? "form-control"
    : "form-control invalid";
  const emailInputClasses = !emailInputHasError
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="text"
          id="name"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Email must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
