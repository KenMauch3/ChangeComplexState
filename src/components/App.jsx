import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName:"",
    lastName:""
  });
  
  function handleChange(e) {
    const {value, name} = e.target;

    setFullName(prevValue =>{
      if(name==="fName"){
        return {firstName: value, lastName: prevValue.lastName};
      } else if (name === "lName") {
        return {firstName: prevValue.firstName,
        lastName: value};
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
