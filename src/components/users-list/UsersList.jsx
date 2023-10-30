/* eslint-disable react/prop-types */
import Container from "../container/Container";
import classes from "./UsersList.module.css";
function UsersList(props) {
  return (
    <Container className={classes.container}>
      {props.data &&
        props.data.map((user, index) => (
          <div key={index}>{`${user.username} ( ${user.age} years old ).`}</div>
        ))}
    </Container>
  );
}

export default UsersList;
