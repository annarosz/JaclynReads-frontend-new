import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import FormInput from '../components/FormInput';
import Button from '../components/Button';
import IntroSectionFlexi from '../components/IntroSectionFlexi';

class Admin extends React.Component {
  state = {
      email: "",
      password: "",
      errMessage: ""
  }
  
  handleInput = e => {
    e.preventDefault();
    //  let errors = this.state.errors
    let value = e.target.value;
    let name = e.target.name;
    if(name === 'email') {
      this.setState( {email: value});
    } else if (name === 'password') {
      this.setState( {password: value});
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
      email:email,
      password:password
    })
    .then((res) => { 
      const returnedToken = res.data.token   
      window.localStorage.setItem("token", returnedToken);
      window.location.href = "/auth/adminshow"
    })
    .catch((err) => {
      console.log(err);
      this.setState({errMessage:"Invalid credentials. Try again"})

    })
    
  }

  render() {

    return (

      <div className="containerSecondary" style={{ backgroundColor: '#BFE9E1'}}>
        <IntroSectionFlexi 
          headingOne="Admin pages, you know what to do..." />
        <div>
          <form className="form-add" onSubmit={this.handleFormSubmit}>
            <FormInput
              inputType={"text"}
              title={"Email"}
              name={"email"}
              value={this.state.email}
              placeholder={"Email"}
              handleChange={this.handleInput}
            />{" "}
            <FormInput
              inputType={"password"}
              title={"Password"}
              value={this.state.password}
              name={"password"}
              placeholder={"Enter password"}
              handleChange={this.handleInput}
            />{" "}
            {/* Clear the form */}
            <Button
              action={this.handleFormSubmit}
              type={"primary"}
              title={"Submit"}
              style={buttonStyle}
            />{" "}
            <Link to="/ForgotPassword">Forgot Password</Link>
            {/*Submit */}
          </form>
          <h4>{this.state.errMessage}</h4>
      </div> 
    </div>    
    );
  } 
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};
export default Admin;
