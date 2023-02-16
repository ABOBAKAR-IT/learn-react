import React,{useMemo, useState } from "react";




function App(data) {

  const [add,setadd]=useState(0)
  const [minux,setminux]=useState(100)
const multiplication=useMemo(()=>{
  console.log(add)
  return add*10
},[add])
  return (
    <>
     <h1>hello</h1>
     
     <span>{multiplication}</span>
     <br/>
      <button onClick={()=>{setadd(add+1)}}>add</button>
      <span>{add}</span>
    <br/>
      <button onClick={()=>setminux(minux-1)}>subtraction</button>
      <span>{minux}</span>
     
    </>
  );
}
export default App;

// usememo store value of a function .usememo have two parameter first for function second for dependence 