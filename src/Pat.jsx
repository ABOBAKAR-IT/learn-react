import { useState,React,useEffect } from "react";
const Pat=()=>{
    let [count,setcount]= useState(0);
    useEffect(()=>{ // useEffect work when page load and any state update
console.log("rana")
    })// you can specify only useEffect work on particular state write state name in  bracket like this [data]
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