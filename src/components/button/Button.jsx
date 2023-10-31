/* eslint-disable react/prop-types */
import classes from "./Button.module.css";
function Button(props) {
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;

// You can add (type) attribute => type={props.type || 'button'} => using || allow you to define a fallback value
