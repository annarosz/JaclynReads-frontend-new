import React from 'react';
import './FormInput.css';

const FormInput = props => {
  return (
    <>
    
    <div className="form-group">
      <label htmlFor={props.name} className="form-label">{props.title}</label>
      <input
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        min='1999'
        noValidate
      />
    </div>
    </>
  );
};

export default FormInput;