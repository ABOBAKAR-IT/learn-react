import React,{useContext} from "react"
import {data,data1} from "./A"
function C(props){
    const name=useContext(data)
    const gender=useContext(data1)
    return (
        <div>
        <h1>My name is {name} and my gender is {gender}</h1>
        </div> )
}
export default C;