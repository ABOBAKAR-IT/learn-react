import React,{useRef} from "react";
import "./style.css"
function App(){

 const refobject=useRef()

 function submitdata(e){
  e.preventDefault();
  console.log(refobject.current.value)
 }
  return(
    <div id="farmdata">
<div id="div2">
    <form onSubmit={submitdata}>
     
      <lable>Name</lable>
      <input type="text" ref={refobject} placeholder="Enter your name" /><br/>
        
     <button >submit</button>
    </form>
</div>
    </div>
  )
}


export default App;

// usememo store value of a function .usememo have two parameter first for function second for dependence 