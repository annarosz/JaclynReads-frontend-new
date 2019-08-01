import React from "react";
import './FormInput.css';

const SearchBar = props => {
 return(
 <>
  <div className="form-group" >
    <label htmlFor={props.name} className="form-label">{props.title}</label>
    <input
      className="searchBorder"
      id={props.name}
      name={props.name}
      type={props.inputType}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      list="books"
    />
    <datalist id="books">
      {props.books}
    </datalist>
  </div>
 </>
 );
};

export default SearchBar;