import B from "./B";
import React,{createContext} from "react"
const data=createContext()
function A(props){
    const name="Rana Abobakar"
    return (
<data.Provider value={name}>

<B />
</data.Provider>
    )
}
export default A;
export {data};