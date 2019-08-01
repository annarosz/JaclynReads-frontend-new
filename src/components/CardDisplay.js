import React from "react";
import './CardDisplay.css';
import Card from '../components/Card';

function CardDisplay(props) {

  return (
    <div className="cardDisplay">
      {props.result.map((review, index) => {
        return (
          <div key={index} className="cardContainer">
            <Card review={review} />
          </div>
          )
        })}
      </div>
    );
  }

export default CardDisplay;