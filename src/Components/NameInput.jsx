// This component updates the state every time the user types

import { useState } from "react";

function NameInput(){
    // name holds the text the user has typed
    // it starts as an empty string
    const [name, setName] = useState('')

    //This function is called every time the input changes
    // 'event' is an object that contains information about what happened
    // 'event.target.value' is the current text inside the input box
    function handleChange(event){
        setName(event.target.value);
    }

 return (
  <div>
    <h2>Type your Name</h2>

    {/* The value of the input is controlled by our state */}
    {/* onChange every time the user types a character */}
    <input
      type="text"
      value={name}
      onChange={handleChange}
      placeholder="Type your name here"
    />

    {/* Only show the greeting if the user has typed something */}
    {/* name.length > 0 is true when the string is not empty */}
    {name.length > 0 && <p>{name}! Welcome to React</p>}
  </div>
);
}

export default NameInput;