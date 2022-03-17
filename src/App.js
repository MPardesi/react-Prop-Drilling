import React,{useState} from "react";
import "./style.css";
import Header from "./Header.js";

export default function App() {
  const[set,setName]=useState();

function handleChange(e)
{
  setName(e.target.value);
}  

  return (
    <div>
      {/* <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p> */}
      <Header name={set}/> 
      <br/><br/>
      <div>
      firstname:
      <input type="text" onChange={handleChange} />
      <br/><br/>
      lastname:
      <input type="text" />
      </div>
    </div>
  );
}
