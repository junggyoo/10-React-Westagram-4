import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends React.Component {
  goToMain() {
    this.props.history.push("/main-junggyoo");
  }
  render() {
    return (
      <div className="Login">
        <div className="loginBorder">
          <header className="loginLogo">
            <img src="/images/junggyoo/logo_text.png" alt="" />
          </header>
          <section className="loginBox">
            <div className="loginId">
              <input
                className="loginInputId"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
            </div>
            <div className="loginPassword">
              <input
                className="loginInputPw"
                type="password"
                placeholder="비밀번호"
              />
            </div>
            <div className="loginBtnBox">
              <button className="loginBtn" onClick={this.goToMain.bind(this)}>
                로그인
              </button>
            </div>
          </section>
          <section className="loginPasswordFind">
            <a href="-">
              <p>비밀번호를 잊으셨나요?</p>
            </a>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
