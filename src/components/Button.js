import React from "react";
import './Button.css'

const Button = props => {
//  console.log(props.style);
 return (
   <div
    onClick={props.action}
     style={props.style}
     className={
       props.type === "primary" ? "primaryButton" : "secondaryButton"
     }
   >
     {props.title}
   </div>
 );
};

export default Button;

// props.type === "primary" ? "btn btn-primary" : "btn btn-secondary"