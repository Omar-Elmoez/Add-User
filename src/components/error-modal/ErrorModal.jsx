/* eslint-disable react/prop-types */
import Button from "../button/Button";
import classes from "./ErrorModal.module.css";

function ErrorModal(props) {
  return (
    <>
      <div className={classes.wrap} onClick={props.onConfirm} />
      <div className={classes.msgBx}>
        <header>{props.title}</header>
        <div>
          <p>{props.message}</p>
          <Button onClick={props.onConfirm}>Okay</Button>
        </div>
      </div>
    </>
  );
}
export default ErrorModal;
