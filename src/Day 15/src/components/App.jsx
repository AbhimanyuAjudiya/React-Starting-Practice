import React, { useState } from "react";

function App() {
  const [fullName, setFirstName] = useState({
    firstName: "",
    lastName: ""
  });
  function handleName(event) {
    const { value, name } = event.target;

    setFirstName((preValue) => {
      if (name === "fName") {
        return {
          firstName: value,
          lastName: preValue.lastName
        };
      } else if (name === "lName") {
        return {
          firstName: preValue.firstName,
          lastName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.firstName} {fullName.lastName}
      </h1>
      <form>
        <input
          onChange={handleName}
          name="fName"
          placeholder="First Name"
          value={fullName.firstName}
        />
        <input
          onChange={handleName}
          name="lName"
          placeholder="Last Name"
          value={fullName.lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
