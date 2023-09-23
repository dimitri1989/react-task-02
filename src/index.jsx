import React,{Component,Fragment} from "react";
import ReactDOM from "react-dom/client";
import ColorsTitle from "./ColorsTitle";


class App extends Component {
    render(){
        return (
            <Fragment>{
                <div style={{textAlign:"center", color:"blue",fontSize:"28px"}}><ColorsTitle></ColorsTitle></div>
                
                }</Fragment>
        )
    }
}
var root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App></App>)