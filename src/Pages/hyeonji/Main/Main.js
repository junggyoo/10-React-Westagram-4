import React from "react";
import "./Main.scss";
import Nav from "./Nav/Nav";
import Feeds from "./Feeds/Feeds";
import Right from "./Right/Right";

class Main extends React.Component {
  componentDidMount() {
    if (!localStorage.getItem("access_token")) {
      alert("로그인을 먼저 하셔야합니다");
      this.props.history.push("login-hyeonji");
    }
  }
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
