import { useState } from "react";
import AddUser from "./components/add-user/AddUser";
import UsersList from "./components/users-list/UsersList";
import ErrorModal from "./components/error-modal/ErrorModal";

function App() {
  const [data, setData] = useState(null);
  const [showError, setShowError] = useState(false); 
  const [age, setAge] = useState();

  const displayUsers = (userInputs) => {
    if (+userInputs.age <= 0) {
      setAge(+userInputs.age)
      handleError();
    } else {
      setData((prevData) => {
        return prevData ? [...prevData, userInputs] : [userInputs];
      });
    }
  };

  const handleError = () => {
    setShowError(!showError);
  };

  const msgStyle = {
    textAlign: "center",
    fontSize: "20px",
    color: "#ddd",
  };
  
  return (
    <>
      <AddUser onSubmit={displayUsers} onError={handleError} />
      {data ? <UsersList data={data} /> : <p style={msgStyle}>No Users Yet!</p>}
      {showError && (
        <ErrorModal
          handleError={handleError}
          age={age}
        />
      )}
    </>
  );
}

export default App;
