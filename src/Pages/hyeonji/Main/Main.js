import React from "react";
import "./Main.scss";
// import feed_img from "../../../../../public/images/hyeonji/feed.jpg";
import Nav from "./Nav/Nav";
import Feeds from "./Feeds/Feeds";
import Right from "./Right/Right";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="MainHJ">
          <main>
            <div className="wrapper">
              <Feeds />
              <Right />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;
