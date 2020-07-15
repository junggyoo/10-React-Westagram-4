import React, { Fragment } from "react";
import Nav from "./Components/Nav/ Nav";
import FirstFeed from "./Components/Feeds/FirstFeed";
import SecondFeed from "./Components/Feeds/SecondFeed";
import ThirdFeed from "./Components/Feeds/ThirdFeed";
import Right from "./Components/Right/Right";
import "./Main.scss";

class WeunMain extends React.Component {
  //localstorage에 token있는 경우에만 메인페이지가 뜨게!
  // componentDidMount = () => {
  //   if (!localStorage.getItem("access_token")) {
  //     alert("로그인 먼저 해주세요");
  //     this.props.history.push("/login-weunjeong");
  //   } else {
  //     return;
  //   }
  // };

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
