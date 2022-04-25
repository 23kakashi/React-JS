import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChnageHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChnageHandler,
    inputBlurHandler: lastNamrBlurHandler,
    reset: resetLasrName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChnageHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if ((nameIsValid && lastNameIsValid && emailIsValid)) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName, enteredLastName);
    console.log(enteredEmail);

    resetName();
    resetLasrName();
    resetEmail();
  };

  const nameInputClasses = !nameHasError
    ? "form-control"
    : "form-control invalid";
  const lastNameInputClasses = !lastNameHasError
    ? "form-control"
    : "form-control invalid";
  const emailInputClasses = !emailHasError
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChnageHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameHasError && <p className="error-text">Firstname is invalid</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChnageHandler}
            onBlur={lastNamrBlurHandler}
            value={enteredLastName}
          />
          {lastNameHasError && <p className="error-text">Lastname is invalid</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChnageHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && <p className="error-text">Email is invalid</p>}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
