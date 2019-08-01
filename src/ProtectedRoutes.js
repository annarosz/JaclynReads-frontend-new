import React from "react";
import { Redirect } from "react-router-dom";
import Private from "./Private";

class ProtectedRoutes extends React.Component {
  isAuthenticated() {
    return localStorage.getItem("token") ? true : false;
  }

  render() {
    if (this.isAuthenticated()) {
      return <Private {...this.props} />;
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default ProtectedRoutes;
