// This component demonstrates how to use onSubmit in React:

import { useState } from "react";

function UserForm() {
  //Stores the Current text inside the input field
  const [name, setName] = useState("");

  //Store the submitted name
  const [submittedName, setSubmittedName] = useState("");

  //Runs whenever the user types in the input field
  function handleChange(event) {
    //Update state with the latest input value
    setName(event.target.value);
  }
  //Runs when the form is submitted
function handleSubmit(event) {
  event.preventDefault();

  setSubmittedName(name);
  setName("");
}

return (
  <div>
    <h2>User Form</h2>

    {/* Form submission event: */}
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your Name"
      />

      {/* Clicking this button triggers onSubmit */}
      <button type="submit">
        Submit
      </button>
    </form>
    
    {/* Show message only after form submission */}
    {submittedName.length > 0 && (
        <p>Welcome, {submittedName}</p>
    )}
</div>
);
}

export default UserForm;