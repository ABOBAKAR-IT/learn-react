import ReactDOM from "react-dom";
import App from "./App";
import Par from "./Par";

let data= (
    <ol>
        <li>Abobakar</li>
        <li>ahmad</li>
        <li>shahzad</li>
    </ol>
)
ReactDOM.render( < App name={data} / > , document.getElementById("root"));

