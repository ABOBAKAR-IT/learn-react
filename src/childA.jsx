import React,{useState} from 'react'
import "./style.css"
function ChildA(props){
  
    const [name,setname]=useState()
    const [email,setemail]=useState()
    const [password,setpassword]=useState()
    
    function submitdata(e){
        e.preventDefault(); // use for prevent html default behavior
       const alldata=[name,email,password]
    props.getvalue(alldata)
       }
        return(
          <div id="farmdata">
      <div id="div2">
          <form onSubmit={submitdata} id='farmdata'>
           <h1 id='r1'>Registration form </h1>
            <lable>Name</lable>
            <input type="text" onChange={e=>setname(e.target.value)} required placeholder="Enter your name" /><br/>
            <lable>email</lable>
            <input type="mail" onChange={e=>setemail(e.target.value)} required placeholder="Enter your email" /><br/>
            <lable>password</lable>
            <input type="password" onChange={e=>setpassword(e.target.value)} required placeholder="Enter your password" /><br/>
             
           <button >submit</button>
          </form>
      </div>
          </div>
        )
}

export default ChildA