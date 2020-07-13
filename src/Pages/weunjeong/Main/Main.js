import React, { Fragment } from "react";
import Nav from "./Components/Nav/ Nav";
import FirstFeed from "./Components/Feeds/FirstFeed";
import SecondFeed from "./Components/Feeds/SecondFeed";
import ThirdFeed from "./Components/Feeds/ThirdFeed";
import Right from "./Components/Right/Right";
import "./Main.scss";

class WeunMain extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <div className="WeunContainer">
          <div className="weunjeongMain">
            <div className="feeds">
              <FirstFeed />
              <SecondFeed />
              <ThirdFeed />
            </div>
            <Right />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default WeunMain;
