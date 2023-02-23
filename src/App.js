import React from "react";

import "./style.css"
function App(){



 const list=["lahore","karachi","multan","lahore"]
  return(
   <div>

 {list.map((v,index)=><h1 key={index}>{v}<br/></h1>)} {/* use key unique for list  */}
   </div>
  )
}


export default App;
