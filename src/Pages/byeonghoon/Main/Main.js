import React, { Component } from "react";
import Nav from "./Nav/Nav";
import MainCenter from "./MainCenter/MainCenter";

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <MainCenter />
      </div>
    );
  }
}

export default Main;
