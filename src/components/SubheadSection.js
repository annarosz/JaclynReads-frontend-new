import React from "react";
import './SubheadSection.css';

function SubheadSection(props) {

  return (
  <div className="SubheadSection">
    <h3>{props.heading}</h3>
  </div>
  );
}

export default SubheadSection;