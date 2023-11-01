import { useState } from "react";
import AddUser from "./components/add-user/AddUser";
import UsersList from "./components/users-list/UsersList";
import ErrorModal from "./components/error-modal/ErrorModal";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const displayUsers = (userInputs) => {
    if (validateValues(userInputs)) {
      setData((prevData) => {
        return prevData ? [...prevData, userInputs] : [userInputs];
      });
    }
  };

  const validateValues = (values) => {
    if (values.username.trim().length === 0 && values.age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
    } else if (+values.age <= 0) {
      setError({
        title: "Invalid Age",
        message: "Age must be greater than zero.",
      });
    } else if (values.username.trim().length === 0) {
      setError({
        title: "Invalid Name",
        message: "Name cannot be empty.",
      });
    } else {
      return true;
    }
  };

  const hideErrorMsg = () => {
    setError(null);
  };

  const msgStyle = {
    textAlign: "center",
    fontSize: "20px",
    color: "#ddd",
  };

  return (
    <>
      <AddUser onSubmit={displayUsers} />
      {data ? <UsersList data={data} /> : <p style={msgStyle}>No Users Yet!</p>}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={hideErrorMsg}
        />
      )}
    </>
  );
}

export default App;
