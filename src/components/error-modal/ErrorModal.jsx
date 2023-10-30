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
    <div className={classes.wrap} onClick={hideErrorMsg}>
      <div className={classes.msgBx}>
        <header>Invalid Input</header>
        <div>
          <p>{msgText}</p>
          <Button>Okay</Button>
        </div>
      </div>
    </div>
  );
}

export default ErrorModal;
