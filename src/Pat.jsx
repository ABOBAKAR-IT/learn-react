import { useState,React,useRef } from "react";
const Pat=()=>{
    const [name,setName]=useState("inter name");
   const useElement=useRef();//useFer used for DOM manipulate 

  function reset(){
      setName("")
    useElement.current.focus();
  }

   function changecolor(){
useElement.current.style.color="red";
   }
    return(
        <>
    <h1>Learning useRef</h1>
    <input type="text" ref={useElement} value={name} onChange={(e)=>{setName(e.target.value)}} />
    <button onClick={reset}>reset</button>
    <button onClick={changecolor}>change color</button>
 
        </>
    )
}
export default Pat;