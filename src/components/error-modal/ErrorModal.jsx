/* eslint-disable react/prop-types */
import Button from "../button/Button";
import classes from "./ErrorModal.module.css";

function ErrorModal(props) {
  console.log("from error modal", props.enteredValues);
  const hideErrorMsg = () => {
    props.handleError();
  };
  let msgText = "";
  if (
    props.enteredValues.username.trim().length === 0 &&
    props.enteredValues.age.trim().length === 0
  ) {
    msgText = "Please enter a valid name and age (non-empty values).";
  } else if (+props.enteredValues.age <= 0) {
    msgText = "Please enter a valid age ( > 0 )";
  } else if (props.enteredValues.username.trim().length === 0) {
    msgText = "Please enter a valid username (non-empty value).";
  }

  return (
    <>
      <div className={classes.wrap} onClick={hideErrorMsg}></div>
      <div className={classes.msgBx}>
        <header>Invalid Input</header>
        <div>
          <p>{msgText}</p>
          <Button onClick={hideErrorMsg}>Okay</Button>
        </div>
      </div>
    </>
  );
}
export default ErrorModal;
