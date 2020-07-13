import React, { Fragment } from "react";
import Nav from "./Components/Nav/ Nav";
import Feeds from "./Components/Feeds/Feeds";
import Right from "./Components/Right/Right";
import "./Main.scss";

class WeunMain extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <div className="weunjeongMain">
          <Feeds />
          <Right />
        </div>
      </Fragment>
    );
  }
}

export default WeunMain;
