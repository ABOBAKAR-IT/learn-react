import B from "./B";
import React,{createContext} from "react"
const data=createContext()
const data1=createContext();
function A(props){
    const name="RANA ABOBAKAR"
    const gender="Male"
    return (
<data.Provider value={name}>
<data1.Provider value={gender}>
<B />
</data1.Provider>
</data.Provider>
    )
}
export default A;
export {data,data1};