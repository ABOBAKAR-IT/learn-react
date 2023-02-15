import React from "react"
import {data,data1} from "./A"
function C(props){
    return (
        <data.Consumer>
{
    (name)=>{
        return (
           <data1.Consumer>
         {   (gender)=>{
                return (
                    <div>
                        <h1>My name is {name} and my gender is {gender}</h1>
                        </div>
                )
            }}
           </data1.Consumer>
        )
    }
}
        </data.Consumer>
    )
}
export default C;