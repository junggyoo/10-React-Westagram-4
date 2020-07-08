import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/junggyoo/Login/Login";
import Main from "./Pages/junggyoo/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-junggyoo" component={Login} />
          <Route exact path="/main-junggyoo" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
