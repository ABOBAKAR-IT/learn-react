import React from "react";
import { Link, useLocation } from "react-router-dom";
function About(){
  
    const locaion=useLocation()
    console.log(locaion.state.id)

    return (
        <>
<h1>About page</h1>
       <><h1>You press Item No {locaion.state.id}</h1></>
       <Link to="/"><h2>Back</h2></Link>


        </>
    )
}
export default About