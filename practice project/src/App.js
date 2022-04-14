import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
// import { v4 as uuidv4 } from 'uuid';
// uuidv4();
function App() {
  const [usersList, serUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    serUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <React.StrictMode>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </React.StrictMode>
  );
}

export default App;
