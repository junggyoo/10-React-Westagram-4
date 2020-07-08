import React from "react";
import "./Login.scss";
// import logo_icon from "../../../../public/images/hyeonji/logo_text.png";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  goToMain() {
    this.props.history.push("/main-hyeonji");
  }
  render() {
    return (
      <div className="Login">
        <div className="container">
          <div className="img-container">
            <img src="/images/hyeonji/logo_text.png" alt="logo image" />
          </div>
          <div className="input-box">
            <input
              type="text"
              id="loginId"
              className="box"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              type="password"
              id="loginPw"
              className="box"
              placeholder="비밀번호"
            />
            <button id="btn" className="box" onClick={this.goToMain.bind(this)}>
              로그인
            </button>
          </div>
          <div className="forget-pw">
            <span>비밀번호를 잊으셨나요?</span>
          </div>
          <script src="js/login.js"></script>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
