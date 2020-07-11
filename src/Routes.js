import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import hyeonjiLogin from "./Pages/hyeonji/Login/Login";
import hyeonjiMain from "./Pages/hyeonji/Main/Main";
import WeunLoginBox from "./Pages/weunjeong/Login/Login";
import WeunMain from "./Pages/weunjeong/Main/Main";
import JunggyooLogin from "./Pages/junggyoo/Login/JunggyooLogin";
import JunggyooMain from "./Pages/junggyoo/Main/JunggyooMain";
import byeonghoonLogin from "./Pages/byeonghoon/Login/Login";
import byeonghoonMain from "./Pages/byeonghoon/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-hyeonji" component={hyeonjiLogin} />
          <Route exact path="/main-hyeonji" component={hyeonjiMain} />
          <Route exact path="/login-weunjeong" component={WeunLoginBox} />
          <Route exact path="/main-weunjeong" component={WeunMain} />
          <Route exact path="/login-junggyoo" component={JunggyooLogin} />
          <Route exact path="/main-junggyoo" component={JunggyooMain} />
          <Route exact path="/login-byeonghoon" component={byeonghoonLogin} />
          <Route exact path="/main-byeonghoon" component={byeonghoonMain} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
