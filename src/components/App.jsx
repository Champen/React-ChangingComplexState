import React, { useState } from "react";

function App() {
  const [isMousedOver, setmouseOver] = useState(false);

  //The initial state of useState is an object (contact) with  fName, lName and email as props
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  //When the mouse is over the button we set it to true and we set the backgroundColor to black
  function handleMouseOver() {
    setmouseOver(true);
  }

  //When the mouse is over the button we set it to false and we set the backgroundColor to white
  function handleMouseOut() {
    setmouseOver(false);
  }

  function handleChange(event) {
    //value = text that is typed in the inputField
    //name = name of the inputfield thats has changed (fName lName or email inputField)
    const { value, name } = event.target;

    //When we call the handleChange function we also call the setContact function witch has an anonomous function
    //The anonomous function gets hold of the prevValue
    setContact((prevValue) => {
      //If we are changing the fName input we return the obejct with the value
      //And the lName and email stays the same cause we set it to the prevValue
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button
          //if isMousedOver = true, the backgroundColor is set to black
          //if isMousedOver = false, the backgroundColor is set to white
          style={{ backgroundColor: isMousedOver ? "black" : "white" }}
          onMouseMove={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
