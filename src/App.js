import React,{useState} from "react";
import ChildA from './childA'
import "./style.css"
function App(){
const [vname,setvname]=useState()

 function lifting(data){
console.log(data)
setvname(data[0])
 }
  return(
   <div>
 {vname?<h1 id="r1">{vname} Rigester Successfully</h1>:<></>}
<ChildA getvalue={lifting}/>
   </div>
  )
}


export default App;

// usememo store value of a function .usememo have two parameter first for function second for dependence 