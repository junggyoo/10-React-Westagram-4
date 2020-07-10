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
    if ((checkId && checkPw) || e.keycode === 13) {
      console.log(id);
      console.log(password);
      this.props.history.push("/main-weunjeong");
    }
    if (!checkId) {
      alert("ID는 @를 포함해야 합니다");
    }
    if (!checkPw) {
      alert("Password는 5글자 이상이어야 합니다");
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
