import Button from "../button/Button";
import Container from "../container/Container";
import classes from "./AddUser.module.css";

function AddUser() {
  return (
    <Container>
      <form className={classes.form}>
        <div className={classes["input-group"]}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="age">Age (Years)</label>
          <input type="number" name="age" id="age" />
        </div>
        <Button>Add User</Button>
      </form>
    </Container>
  );
}

export default AddUser;
