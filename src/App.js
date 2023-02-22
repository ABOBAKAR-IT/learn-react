import React,{useState} from "react";
import ChildA from './childA'
import "./style.css"
function App(){
const [vname,setvname]=useState()

 function lifting(name){
console.log(name)
setvname(name)
 }
  return(
   <div>
    <h2>"{vname}" value received by child A</h2>
<ChildA getvalue={lifting}/>
   </div>
  )
}


export default App;

// usememo store value of a function .usememo have two parameter first for function second for dependence 