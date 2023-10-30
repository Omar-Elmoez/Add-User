/* eslint-disable react/prop-types */
import Button from "../button/Button";
import classes from "./ErrorModal.module.css";

function ErrorModal(props) {
  const hideErrorMsg = () => {
    props.handleError();
  };
  let msgText = "Please enter a valid name and age (non-empty values).";
  if (props.age && +props.age <= 0) {
    msgText = "Please enter a valid age ( > 0 )";
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
