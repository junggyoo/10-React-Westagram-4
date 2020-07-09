import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/junggyoo/Login/Login";
import Main from "./Pages/junggyoo/Main/Main";
import hyeonjiLogin from "./Pages/hyeonji/Login/Login";
import hyeonjiMain from "./Pages/hyeonji/Main/Main";
import WeunLoginBox from "./Pages/weunjeong/Login/Login";
import WeunMain from "./Pages/weunjeong/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-junggyoo" component={Login} />
          <Route exact path="/main-junggyoo" component={Main} />
          <Route exact path="/login-hyeonji" component={hyeonjiLogin} />
          <Route exact path="/main-hyeonji" component={hyeonjiMain} />
          <Route exact path="/login-weunjeong" component={WeunLoginBox} />
          <Route exact path="/main-weunjeong" component={WeunMain} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
