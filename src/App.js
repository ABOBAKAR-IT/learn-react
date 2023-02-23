import React,{ useState } from "react";





function App(data) {

const [fullname,setfullname]=useState({fistname:"Rana",lastname:"Abobakar"})
function changeName(){
  let name="Raja";
setfullname({...fullname,fistname:"Raja"}) // use spread operator to edit useState object value
}
return (
  <>
  <h1>My first name is "{fullname.fistname}" and my last name is "{fullname.lastname}"</h1>
  <button onClick={changeName}> click me</button>
  </>
)
}
export default App;

// usememo store value of a function .usememo have two parameter first for function second for dependence 