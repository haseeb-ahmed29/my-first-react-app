// This component demonstrate the OnMouseDown event

import { useState } from "react";

function KeyPress(){
    //Stores the key Pressed by the user.
    const[pressedKey, setPressedKey] = useState('');

    //Runs whenever a key is pressed down
    function handleKeyDown(event){
        //even.key contains the key name
        setPressedKey(event.key);

    }

    return(
        <div>
            <h2>OnKeyDown example</h2>
            <input
                type="text"
                onKeyDown={handleKeyDown}

                placeholder="Press any key..."
            />
            <p>Pressed Key: {pressedKey}</p>
        </div>
    )
}

export default KeyPress;




