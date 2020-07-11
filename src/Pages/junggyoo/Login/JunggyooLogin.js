import React from "react";
import { withRouter } from "react-router-dom";
import "./junggyooLogin.scss";

class JunggyooLogin extends React.Component {
  goToMain = () => {
    this.props.history.push("/main-junggyoo");
  };
  state = {
    email: "",
    password: "",
  };

  onChange = (e) => {
    let emailInput = e.target.name;
    let passwordInput = {
      ...this.state,
    };
    emailInput === "email"
      ? (passwordInput.email = e.target.value)
      : (passwordInput.password = e.target.value);

    this.setState(passwordInput);
  };

  render() {
    return (
      <div className="Login">
        <div className="loginBorder">
          <header className="loginLogo">
            <img src="/images/junggyoo/logo_text.png" alt="" />
          </header>
          <section className="loginBox" onChange={this.onChange}>
            <div className="loginId">
              <input
                className="loginInputId"
                type="text"
                name="email"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                value={this.state.email}
              />
            </div>
            <div className="loginPassword">
              <input
                className="loginInputPw"
                type="password"
                value={this.state.password}
                placeholder="비밀번호"
              />
            </div>
            <div className="loginBtnBox">
              <button
                className="loginBtn"
                onClick={this.goToMain}
                style={{
                  backgroundColor:
                    this.state.email.indexOf("@") !== -1 &&
                    this.state.password.length >= 5
                      ? "red"
                      : "blue",
                }}
              >
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

export default withRouter(JunggyooLogin);
