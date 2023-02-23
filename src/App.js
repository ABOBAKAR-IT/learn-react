import React,{ useState } from "react";





function App(data) {

const [list,setlist]=useState([])
function changeName(){
setlist([...list,{
  id:list.length,
  value:Math.random(4)
}])
  }
return (
  <>
<div>
  <ol>
    {list.map(v=>{
   return <li key={v.id}>{v.value}</li>
    })}
  </ol>
</div>
  <button onClick={changeName}> add me</button>
 </>
)
}
export default App;

// usememo store value of a function .usememo have two parameter first for function second for dependence 