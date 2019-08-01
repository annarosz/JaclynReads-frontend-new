import React from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import axios from 'axios';
import emailValidator from 'email-validator';
import IntroSectionFlexi from '../components/IntroSectionFlexi';

class ForgotPassword extends React.Component {
  state = {
    forgotPassword: {
      enterEmail: ""
    },
    checkmail: ""
  }

  handleInput = e => {
    e.preventDefault();
    let value = e.target.value;
      this.setState( {forgotPassword : {
        enterEmail: value
      }});
  };

  validateInput = () => {
    
    let emailValidity = emailValidator.validate(this.state.email);
    if(!emailValidity) {
      this.setState({invalidEmail:"Enter a valid email address"});
    }
    return emailValidity
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.validateInput()) {
      console.log("validated")
      // eslint-disable-next-line
      const formData = {email:this.state.email};

   }
    const email = this.state.forgotPassword.enterEmail;
    axios.post(`${process.env.REACT_APP_API_URL}/auth/forgot`, {
      email:email,
    })
    .then((res) => {
      const returnedToken = res.data.token   
      window.localStorage.setItem("resetToken", returnedToken);
      this.setState( {checkmail : "Check your email. The link is valid for 10 minutes."})
    })
    .catch((err) => {
    })
  }

  render() {

    return (
      <>
      <div className="containerSecondary" style={{ backgroundColor: '#BFE9E1'}}>
      <IntroSectionFlexi 
          headingOne="Reset your password..." />
      <form className="form-add" onSubmit={this.handleFormSubmit}>
          <FormInput
            inputType={"text"}
            title={"Forgot Password"}
            name={"title"}
            value={this.state.forgotPassword.title}
            placeholder={"Enter your email"}
            handleChange={this.handleInput}
          />{" "}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
        />{" "}
        <h4>{this.state.checkmail}</h4>
        </form>
      </div>
      </>
    );
  } 
}
export default ForgotPassword;














// import React from 'react';
// import IntroSection from '../components/IntroSection';

// function Subscribe() {

//   return (
//     <>
//     <div>
//       <IntroSection 
//         headingOne="Subscribe page" 
//       />
//     </div>
//     </>
//   );
// }

// export default Subscribe;