import React, { Component, Fragment } from "react";
import Nav from "./Nav/Nav";
import MainCenter from "./MainCenter/MainCenter";
import MainRight from "./MainRight/MainRight";
import "./Main.scss";

class ByeonghoonMain extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <div className="byeonghoonMain">
          <MainCenter />
          <MainRight />
        </div>
      </Fragment>
    );
  }
}

export default ByeonghoonMain;
