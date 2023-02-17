
import React, {memo} from 'react'

function ChildA(props){
    console.log("hello ")
    return(
        <div>
            <h1></h1>
        </div>
    )
}
export default memo(ChildA); 