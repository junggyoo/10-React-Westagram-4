import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  render() {
    return (
      <body class="login_body">
        <main>
          <div className="login_screen">
            <div className="logo_img">
              <img
                alt="instagram_logo"
                src="/images/byeonghoon/logo_text.png"
              />
            </div>
            <form className="id_pw_form">
              <input
                className="id_input"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                className="pw_input"
                type="password"
                placeholder="비밀번호"
              />
              <button className="login_button">로그인</button>
            </form>
            <div className="forgot_pw">
              <p>비밀번호를 잊으셨나요?</p>
            </div>
          </div>
        </main>
      </body>
    );
  }
}

export default Login;
