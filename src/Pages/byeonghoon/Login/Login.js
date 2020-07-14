import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class BH_Login extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      pw: "",
    };
  }
  // 이해를 못함..
  // consoleIdPw = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  consoleId = (e) => {
    this.setState({
      id: e.target.value,
    });
  };

  consolePw = (e) => {
    this.setState({
      pw: e.target.value,
    });
  };

  showValue = () => {
    console.log("id :", this.state.id, "pw :", this.state.pw);
    this.goToMain();
  };

  goToMain = () => {
    this.props.history.push("/main-byeonghoon");
  };

  handleEnter = (e) => {
    if (e.key === "Enter") {
      this.goToMain();
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="BH_Login">
        <main className="BH_main">
          <div className="login_screen">
            <div className="logo_img">
              <img
                alt="instagram_logo"
                src="/images/byeonghoon/logo_text.png"
              />
            </div>
            <form className="id_pw_form">
              <input
                onChange={this.consoleId}
                className="id_input"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                onChange={this.consolePw}
                onKeyPress={this.handleEnter}
                className="pw_input"
                type="password"
                placeholder="비밀번호"
              />
              <button
                className={
                  this.state.id.includes("@") &&
                  this.state.id.length > 5 &&
                  this.state.pw.length > 5
                    ? "button2"
                    : "button"
                }
                onClick={this.showValue}
              >
                로그인
              </button>
            </form>
            <div className="forgot_pw">
              <p>비밀번호를 잊으셨나요?</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(BH_Login);
