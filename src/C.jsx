import React from "react"
import {data} from "./A"
function C(props){
    return (
        <data.Consumer>
{
    (name)=>{
        return (
            <div>
                <h1>context api done by {name}</h1>
            </div>
        )
    }
}
        </data.Consumer>
    )
}
export default C;