import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./junggyooLogin.scss";

class JunggyooLogin extends React.Component {
  goToMain = () => {
    this.state.email.includes("@") &&
      this.state.password.length >= 5 &&
      this.props.history.push("/main-junggyoo");

    fetch("http://10.58.0.219:8000/user/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.access_token);
        if (res.access_token) {
          localStorage.setItem("wtw-token", res.access_token);
        }
      });
  };

  state = {
    email: "",
    password: "",
    logingBtnActive: false,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      logingBtnActive:
        this.state.email.includes("@") && this.state.password.length >= 5
          ? true
          : false,
    });
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
          <div className="LoginBorderBox">
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
                  name="password"
                  value={this.state.password}
                  placeholder="비밀번호"
                />
              </div>
              <div className="loginBtnBox">
                <button
                  className={
                    this.state.logingBtnActive ? "loginBtnActive" : "loginBtn"
                  }
                  onClick={this.goToMain}
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
                <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%2522exidbn11f5ple3t5mc11b0sz7r99gmh212iafqk8h7h7y1ueeif1%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Dko_KR%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D69c27629-e4fa-4125-8835-91492a07083e&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522exidbn11f5ple3t5mc11b0sz7r99gmh212iafqk8h7h7y1ueeif1%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%23_%3D_&display=page&locale=ko_KR&pl_dbl=0">
                  <span> Facebook으로 로그인</span>
                </a>
              </button>
              <section className="loginPasswordFind">
                <Link to="accounts/password/reset/">
                  <p>비밀번호를 잊으셨나요?</p>
                </Link>
              </section>
            </section>
          </div>
          <div className="signUpContainer">
            <div className="signUpBox">
              <p>
                계정이 없으신가요?
                <Link to="/accounts/emailsignup/">
                  <span>가입하기</span>
                </Link>
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
