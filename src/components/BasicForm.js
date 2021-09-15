import useFormInput from "./hooks/use-formInput";
const BasicForm = (props) => {
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    firstNameOnResetHandler();
    lastNameOnResetHandler();
    emailOnResetHandler();
  };
  const {
    value: firstName,
    hasError: firstNameHasError,
    onChangeHandler: firstNameChangeHandler,
    onBlurHandler: firstNameOnBlurHandler,
    onResetHandler: firstNameOnResetHandler,
    classes: firstNameInputClasses,
  } = useFormInput((value) => value.trim() !== "");
  const {
    value: lastName,
    hasError: lastNameHasError,
    onChangeHandler: lastNameChangeHandler,
    onBlurHandler: lastNameOnBlurHandler,
    onResetHandler: lastNameOnResetHandler,
    classes: lastNameInputClasses,
  } = useFormInput((value) => value.trim() !== "");
  const {
    value: email,
    hasError: emailHasError,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailOnBlurHandler,
    onResetHandler: emailOnResetHandler,
    classes: emailInputClasses,
  } = useFormInput((value) => value.includes("@"));
  const formIsValid = !firstNameHasError && !lastNameHasError && !emailHasError;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameOnBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">First name must not be empty</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameOnBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Last name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailOnBlurHandler}
        />
        {emailHasError && <p className="error-text">Email must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
