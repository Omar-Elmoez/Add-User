import Container from "../container/Container";
import classes from './UsersList.module.css';
function UsersList() {
  return (
    <Container className={classes.container}>
      <div>User One</div>
      <div>User Two</div>
    </Container>
  );
}

export default UsersList;