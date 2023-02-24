import React,{  useState } from "react";

import "./style.css"
function App(){
const [listvalue,setlistvalue]=useState([])
const [v,setv]=useState('')
function control_list(e){
setv(e.target.value)
 
}

function submit_btn(){
  console.log(v)
  if(v){
    
    setlistvalue([...listvalue,{
      id:listvalue.length,
      value:v
    }])
  }
  else{
    alert("fill input")
  }
}

function remove_value(e)
{
  console.log("rmove "+e.target.value)
  const vv =listvalue.filter(v1=>{
   return v1.id!=e.target.value
  })

  setlistvalue(vv);
}

  return (
   <>
   <div style={{width:"65%",backgroundColor:"black",textAlign:"center",margin:"auto",borderRadius:"15px"}}>
    <div style={{alignItems:'center',backgroundColor:"#06054b",borderRadius:"15px",borderRadius:"15px"}}>
<h1 style={{color:"white"}}>ToDo List</h1>
<div >
 {listvalue.map(v=>{
  return <> <h3 key={v.id} style={{display:"inline",backgroundColor:"#9fc8f0",color:"black", padding:"4px",borderRadius:"3px"}}>{v.value}</h3>
  <button onClick={remove_value} value={v.id} style={{margin:"10px",backgroundColor:"#479f51",padding:"5px",borderRadius:"3px"}}>Remove</button><br/></>
 })}
</div>
<div>
  <input style={{display:"inline"}} name="list" value={v} onChange={control_list}></input>
  <button style={{margin:"10px",backgroundColor:"#479f51",padding:"5px",borderRadius:"3px"}} onClick={submit_btn}>Add List</button>
</div>
<div>
  <button onClick={(e)=>{setlistvalue([])}} style={{margin:"10px",backgroundColor:"#479f51",padding:"5px",borderRadius:"3px"}}>Delete</button>
</div>
    </div>
   </div>
   </>
  );
}
export default App;
