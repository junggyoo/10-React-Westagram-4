import React, { Component } from "react";
import Nav from "./Nav/Nav";
import MainCenter from "./MainCenter/MainCenter";
import MainRight from "./MainRight/MainRight";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="byeonghoonMain">
          <MainCenter />
          <MainRight />
        </div>
      </div>
    );
  }
}

export default Main;
