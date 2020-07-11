import React from "react";
import { withRouter } from "react-router-dom";
import "./junggyooLogin.scss";

class JunggyooLogin extends React.Component {
  goToMain = () => {
    this.state.email.indexOf("@") !== -1 &&
      this.state.password.length >= 5 &&
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
      <div className="JunggyooLogin">
        <img
          className="loginMobileImg"
          src="/images/junggyoo/loginMobileImg.png"
          alt=""
        />
        <div className="loginContainer">
          <div className="Login">
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
                      this.state.password.length >= 5 &&
                      "#0096f6",
                  }}
                >
                  로그인
                </button>
              </div>
              <div className="loginOrLine">
                <div className="line"></div>
                <div className="or">또는</div>
                <div className="line"></div>
              </div>
              <button className="facebookLogin">
                <i class="fab fa-facebook-square"></i>
                <span> Facebook으로 로그인</span>
              </button>
              <section className="loginPasswordFind">
                <a href="-">
                  <p>비밀번호를 잊으셨나요?</p>
                </a>
              </section>
            </section>
          </div>
          <div className="signUpContainer">
            <div className="signUpBox">
              <p>
                계정이 없으신가요?
                <a href="/accounts/emailsignup/">
                  <span>가입하기</span>
                </a>
              </p>
            </div>
          </div>
          <section className="appDownContainer">
            <p>앱을 다운로드 하세요.</p>
            <div className="appDownBox">
              <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo">
                <img
                  alt="App Store에서 이용 가능"
                  src="/images/junggyoo/AppStoreImg.png"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D9FB376F9-8D00-4F7F-A3B3-47011AD62233%26utm_content%3Dlo%26utm_medium%3Dbadge">
                <img
                  alt="Google Play에서 이용 가능"
                  src="/images/junggyoo/GooglePlayImg.png"
                />
              </a>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(JunggyooLogin);
