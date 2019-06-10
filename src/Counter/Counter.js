import React from "react";
import { useState } from "react";

//Usando hooks

 const Counter = (props) => {
   
   const[count, setCount] = useState(0);
   
    return (
        <>
           <button className="suma" onClick={()=> setCount(count+1)} >Add one</button> 
           <button className="resta" onClick={()=> setCount(count-1)} >Minus one</button> 
           <p>La cuenta es {count}</p>
        </>
    )
}
export default Counter;