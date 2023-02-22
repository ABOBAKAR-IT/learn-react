import React,{useState,useEffect} from 'react'
import "./style.css"
function ChildA(){
  const data={name:"",mail:"",password:""}
    const [inputdata,setinputdata]=useState(data)
const [check,setcheck]=useState(false)
    function handleinput(e){
     setinputdata({...inputdata,[e.target.name]:e.target.value})
     console.log(inputdata)
    }
    useEffect(()=>{
      console.log("i am set")
    },[check])
    function submitdata(e){
        e.preventDefault(); // use for prevent html default behavior
   if(!inputdata.name|| !inputdata.mail||!inputdata.password){
    alert("fill all input")
   }
   else{
setcheck(true)
   }
       }
        return(
          <div id="farmdata">
        {check?<h1 id='r1'>{inputdata.name} Register successfully</h1>:<></>}
      <div id="div2">
          <form onSubmit={submitdata} id='farmdata'>
           <h1 id='r1'>Registration form </h1>
            <lable>Name</lable>
            <input type="text" name="name" onChange={handleinput}  placeholder="Enter your name" /><br/>
            <lable>email</lable>
            <input type="mail" name="mail" onChange={handleinput}  placeholder="Enter your email" /><br/>
            <lable>password</lable>
            <input type="password" name="password" onChange={handleinput}  placeholder="Enter your password" /><br/>
             
           <button >submit</button>
          </form>
      </div>
          </div>
        )
}

export default ChildA