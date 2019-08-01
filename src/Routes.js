import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./container/HomePage";
import ShowPage from "./container/ShowPage";
import TopPicks from "./container/TopPicks";
import SortByYear from "./container/SortByYear";
import SortByGenre from "./container/SortByGenre";
import AboutMe from "./container/AboutMe";
import Subscribe from "./container/Subscribe";
import Admin from "./container/Admin";
import ProtectedRoutes from "./ProtectedRoutes";
import ForgotPassword from "./container/ForgotPassword";
import ResetPassword from "./container/ResetPassword";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/show/:q" exact component={ShowPage} />
        <Route path="/toppicks" exact component={TopPicks} />
        <Route path="/sortbyyear" exact component={SortByYear} />
        <Route path="/sortbygenre" exact component={SortByGenre} />
        <Route path="/aboutme" exact component={AboutMe} />
        <Route path="/subscribe" exact component={Subscribe} />
        <Route path="/adminjaclyn" exact component={Admin} />
        <Route path="/ForgotPassword" exact component={ForgotPassword} />
        <Route path="/auth" component={ProtectedRoutes} />
        <Route path="/ResetPassword" exact component={ResetPassword} />
      </Switch>
    );
  }
}

export default Routes;
