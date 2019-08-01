import React from "react";
import './CardAdmin.css';

function CardAdmin(props) {

  return (
    <div className="cardAdmin">

      <div className="cardAdminLeft">
        <div className="cardAdminLeftTop">
          <img src={props.url} alt={props.title}  ></img>
          </div>
        <div className="cardAdminLeftBottom">
          <button onClick={() => props.handleEditClick(props.reviewObject)} className="edit"> Edit</button>
          <button onClick={() => props.handleDeleteClick(props.title)} className="edit"> Delete</button>
        </div>
      </div>

      <div className="cardAdminRight">
        <p><strong>Title:</strong> {props.title}</p>
        <p><strong>Author:</strong> {props.author}</p>
        <p><strong>Review:</strong> {props.review}</p>
        <p><strong>Publisher:</strong> {props.publisher}</p>
        <p><strong>Year Published:</strong> {props.yearPublished}</p>
        <p><strong>Genre:</strong> {props.genre}</p>
        <p><strong>ISBN:</strong> {props.isbn}</p>
        <p><strong>URL to buy:</strong> {props.url}</p>
        <p><strong>SEO Keywords:</strong> {props.keywords}</p>
      </div>

    </div>
  );
}

export default CardAdmin;