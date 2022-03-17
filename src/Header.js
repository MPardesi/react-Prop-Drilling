import React from "react";
import "./style.css";

export default function Header(prop){
  console.log(prop);
return(
  <div>
    {prop.name}
  </div>
);
}