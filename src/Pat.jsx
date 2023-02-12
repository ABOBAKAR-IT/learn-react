import Cat from "./cat";
const Pat=(props)=>{
    return(
        <div>
            <h1>Pat</h1> 
            <p>Pant 1 {props.name}</p>
            <p>Pant 2 {props.name1}</p>
            <p>Pant 2 {props.name2}</p>
<Cat name={props.name} />
        </div>
    )
}
export default Pat;