import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JunggyooLogin from "./Pages/junggyoo/Login/JunggyooLogin";
import JunggyooMain from "./Pages/junggyoo/Main/JunggyooMain";
// import hyeonjiLogin from "./Pages/hyeonji/Login/Login";
// import hyeonjiMain from "./Pages/hyeonji/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-junggyoo" component={JunggyooLogin} />
          <Route exact path="/main-junggyoo" component={JunggyooMain} />
          {/* <Route exact path="/login-hyeonji" component={hyeonjiLogin} />
          <Route exact path="/main-hyeonji" component={hyeonjiMain} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
