import React from "react";
import { useNavigate } from "react-router-dom";
function Home(){
    const navigater=useNavigate();


    function go_to_about(e){
        
 navigater("/about",{state:{id:e.target.name}});
    }
   
    return (
        <>
        <h1>Home</h1>

<button onClick={go_to_about} name="1">item 1</button>
<button onClick={go_to_about} name="2">item 2</button>
<button onClick={go_to_about} name="3">item 3</button>


        </>
    )
}
export default Home
