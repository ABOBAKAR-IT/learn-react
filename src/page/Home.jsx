import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Home(){
    const navigater1=useNavigate();
    const navigater2=useNavigate();

    function go_to_about(){
navigater1("/about");
    }
    function go_to_info(){
        navigater2("/info");
            }
    return (
        <>
        <h1>Home</h1>
<Link to="/about"><h1>About</h1></Link>
<button onClick={go_to_info}>Info</button>
<button onClick={go_to_about}>About</button>
        </>
    )
}
export default Home
