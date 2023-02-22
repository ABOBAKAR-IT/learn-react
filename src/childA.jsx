import React,{useState} from 'react'

function ChildA(props){
    const [name,setname]=useState()
    function submitdata(e){
        e.preventDefault();// use for prevent html default behavior
    props.getvalue(name)
       }
        return(
          <div id="farmdata">
      <div id="div2">
          <form onSubmit={submitdata}>
           
            <lable>Name</lable>
            <input type="text" onChange={e=>setname(e.target.value)} placeholder="Enter your name" /><br/>
              
           <button >submit</button>
          </form>
      </div>
          </div>
        )
}

export default ChildA