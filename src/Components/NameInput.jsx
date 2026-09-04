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

    return(
        <div>
            <h2>Type your Name</h2>
        </div>
    )
}