
import {useState} from "react";

function Counter (){

    const [count, setCount] = useState(0);

     function handelAdd(){
        setCount (count+1)
     }
     function handleSubtract(){
        setCount(count-1)
     }
     function handleReset(){
        setCount(0)
     }



return(
<div>
    <h2>Counter</h2>
    <p>Current Count:{count} </p>
    <button onClick={handelAdd}>Add 1</button>
    <button onClick={handleSubtract}>Subtract 1</button>
    <button onClick={handleReset}>Reset</button>
</div>



)
}

export default Counter;