import React from "react";
import './Card.css';
import {Link} from 'react-router-dom';

function Card(props) {

return (
    <div className="card">
      <div className="cardLeft">
      <img src={props.review.props.children.props.url} alt={props.title}  ></img>
      </div>
      <div className="cardRight">
        <div className="cardRightTop">
          <p className="cardTitle">{props.review.props.children.props.title}</p>
          <p>{props.review.props.children.props.author}</p>

            { props.review.props.children.props.topPick === true && 
              <span className="topPickDiv">
                <i className="star icon"></i><p>Top Pick</p>
              </span>
            }

        </div>
        <div className="cardRightBottom">
          <Link className="outlineButton" to={'/show/' + props.review.props.children.props.title}>Read more</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;