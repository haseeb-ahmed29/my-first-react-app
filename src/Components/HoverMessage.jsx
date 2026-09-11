// This component demonstrate the onMouseOver event

import { useState } from "react";

function HoverMessage(){
    //State to store the message show on screen
    const [message, setMessage] = useState(
        "Move your mouse over the box"
    )

    //Runs when the mouse enters the box
    function handleMouseOver(){
        setMessage("🤞 Mouse is over the box")
    }

    //Runs when the mouse enters the box
    function handleMouseLeave(){
        setMessage("Move your mouse over the box")
    }

return (
    <div>
        <h2>Mouse Over Example</h2>
        <p>{message}</p>
        <div
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            style={{
                margin: 'auto',
                width: '250px',
                height: '100px',
                backgroundColor: 'lightblue',
                border: '2px solid darkblue',
                borderRadius: '20px',
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
            }}
        >
            Hover Over Me
        </div>
    </div>
)

}
export default HoverMessage;
