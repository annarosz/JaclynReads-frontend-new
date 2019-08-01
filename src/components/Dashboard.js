import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Dashboard extends Component {

  deleteToken= (e) => {
    window.localStorage.removeItem("token");
  }

  checkToken() {
    const token = window.localStorage.getItem("token");
    if(!token) { 
      return <Redirect to='/adminjaclyn' />
    } else {
      // debugger
      axios.get(`${process.env.REACT_APP_API_URL}/private/secrets`,{headers:{'token':token}})
      .then((res) => {
          return <h1>My Dashboard</h1>
      }).catch(err => {
        console.log(err);
        alert("Invalid token. Will be redirected to login page");
        return <Redirect to='/adminjaclyn' />;
      }); 
    }
  }

  render() {
    return(
    <>
      {this.checkToken()}
      <Link to = '/adminjaclyn' onClick={this.deleteToken}> Logout </Link>

    </>)
  }
}
export default Dashboard;

