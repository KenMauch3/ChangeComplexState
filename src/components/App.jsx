import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName:"",
    lastName:""
  });
  
  function handleChange(e) {
    const newValue = e.target.value;
    const inputName = e.target.name;

    if(inputName==="fName"){
      setFullName({firstName: newValue, lastName: fullName.lastName})
    } else if (inputName === "lName") {
      setFullName({firstName: fullName.firstName,
      lastName: newValue})
    }
  }


  return (
    <div className="container">
      <h1>
        Hello {fullName.firstName} {fullName.lastName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={fullName.firstName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={fullName.lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
