import React,{useCallback, useState } from "react";
import ChildA from "./ChildA";

import "./style.css"
function App(){



function App(data) {

  const [add,setadd]=useState(0)
  const [count,setcount]=useState(0)

const multiplication=useCallback(()=>{
 
},[count])
  return (
    <>
     <h1>hello</h1>
<ChildA count={multiplication}/>
    
     <br/>
      <h1>{add}</h1>
      <button onClick={()=>{setadd(add+1)}}>add</button>
      <br/>
      <h1>{count}</h1>
      <button onClick={()=>{setcount(count+1)}}>count</button>
   
    </>
  );
}
export default App;
