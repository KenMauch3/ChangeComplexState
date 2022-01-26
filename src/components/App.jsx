import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleFirstNameChange}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleLastNameChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
