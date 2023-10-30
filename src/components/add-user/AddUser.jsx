/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../button/Button";
import Container from "../container/Container";
import classes from "./AddUser.module.css";

const initialData = {
  username: "",
  age: "",
};

function AddUser(props) {
  const [userInputs, setUserInputs] = useState(initialData);

  const changeHandler = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (userInputs.username && userInputs.age) {
      props.onSubmit(userInputs);
      if (+userInputs.age > 0) {
        setUserInputs(initialData);
      }
    } else {
      props.onError();
    }
  };

  return (
    <Container>
      <form className={classes.form} onSubmit={handleSubmitForm}>
        <div className={classes["input-group"]}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={userInputs.username}
            onChange={changeHandler}
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            name="age"
            id="age"
            value={userInputs.age}
            onChange={changeHandler}
          />
        </div>
        <Button>Add User</Button>
      </form>
    </Container>
  );
}

export default AddUser;
