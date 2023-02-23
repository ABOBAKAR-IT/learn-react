import React from "react";

import "./style.css"
function App(){



 const list=["lahore","karachi","multan"]
  return(
   <div>
{list.map((v)=><h1>{v}<br/></h1>)}
   </div>
  )
}


export default App;

// usememo store value of a function .usememo have two parameter first for function second for dependence 