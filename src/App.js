import React,{useEffect, useState } from "react";
import "./style.css"
function App(){

  const [name,setname]=useState("")
  const [password,setpassword]=useState("")

  return(
    <div id="farmdata">
<div id="div2">
    <form>
     
      <lable>Name</lable>
      <input type="text" name="name"  onChange={(e)=>{setname(e.target.value)}} placeholder="Enter your name" /><br></br>
        <lable>password</lable>
      <input type="password" name="password" onChange={(e)=>{setpassword(e.target.value)}} placeholder="Enter your password" />
      
    </form>
</div>
    </div>
  )
}


export default App;

// usememo store value of a function .usememo have two parameter first for function second for dependence 