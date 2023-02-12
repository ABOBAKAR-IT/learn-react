import { useState,React } from "react";
const Pat=()=>{
    let [count,setcount]= useState(0);
    function display(){
        
     setcount(count+1);
    }
    function decrement(){
        if(count>0)
        setcount(count-1)
    }
    return(
    <div>
        <h1>Button clicked {count} time</h1>
        <button onClick={display}>increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
    )
}
export default Pat;