import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class WeunLoginBox extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: "",
      hidden: true,
    };
  }

  handleIdChange = (e) => {
    this.setState({ id: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  checkValidity = (e) => {
    e.preventDefault();
    const { id, password } = this.state;
    const checkId = id.includes("@");
    const checkPw = password.length >= 5;
    if ((checkId && checkPw) || e.key === "Enter") {
      // console.log(id);
      // console.log(password);
      this.props.history.push("/main-weunjeong");
      //회원가입 & 로그인시 스토리지에 토큰 저장
      //   fetch("http://10.58.0.219:8000/user/sign-in", {
      //     method: "POST",
      //     body: JSON.stringify({
      //       email: id,
      //       password: password,
      //     }),
      //   })
      //     .then((res) => res.json())
      //     .then((res) => {
      //       localStorage.setItem("access_token", res.access_token);
      //       if (res.access_token) {
      //         this.props.history.push("/main-weunjeong");
      //         alert("로그인 성공");
      //       } else {
      //         alert("다시 로그인해주세요");
      //       }
      //     });
    }
    if (!checkId) {
      alert("ID는 @를 포함해야 합니다");
    }
    if (!checkPw) {
      alert("Password는 4글자 이상이어야 합니다");
    }
  };

  showPassword = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  moveToFacebook = () => {
    window.open("https://www.facebook.com");
  };

  render() {
    const activateBtn =
      this.state.id.length !== 0 && this.state.password.length !== 0;
    return (
      <div className="login-box">
        <div className="login-logo">
          <img alt="instagram-logo" src="/images/weunjeong/logo_text.png" />
        </div>
        <form className="login-info" action="">
          <input
            id="id"
            type="text"
            placeholder="Phone number, username, or email"
            value={this.state.id}
            onChange={this.handleIdChange}
          />
          <div className="pw-container">
            <input
              id="pw"
              type={this.state.hidden ? "password" : "text"}
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
            <span className="showPw" onClick={this.showPassword}>
              Show
            </span>
          </div>
          <button
            id="btn"
            onClick={this.checkValidity}
            onKeyUp={this.checkValidity}
            style={{ backgroundColor: activateBtn ? "#055cb1" : "#c0dffd" }}
          >
            Log In
          </button>
        </form>
        <div className="login-bottom">
          <hr /> OR
          <hr />
        </div>
        <span className="login-fb" onClick={this.moveToFacebook}>
          <img
            className="fb-img"
            alt="fb-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/534px-F_icon.svg.png"
          />
          &nbsp;&nbsp;Log In with Facebook
        </span>
        <span className="login-pw">Forgot Password?</span>
      </div>
    );
  }
}

export default withRouter(WeunLoginBox);
