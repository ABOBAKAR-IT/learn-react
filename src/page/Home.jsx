import React from "react";
import { Link } from "react-router-dom";
function Home(){
    return (
        <>
        <h1>Home</h1>
<Link to="/about"><h1>About</h1></Link>
<Link to="/info"><h1>Info</h1></Link>

        </>
    )
}
export default Home
