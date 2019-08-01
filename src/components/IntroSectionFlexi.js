import React from "react";
import './IntroSectionFlexi.css';

function IntroSectionFlexi(props) {

  return (

  <div className="IntroSectionFlexi">
    <h1>{props.headingOne}</h1>
    <h2>{props.headingTwo}</h2>
    <p>{props.headingThree}</p>
  </div>
  );
}

export default IntroSectionFlexi;