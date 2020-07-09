import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class WeunLoginBox extends React.Component {
  goToMain() {
    this.props.history.push("/main-weunjeong");
  }
  render() {
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
          />
          <div className="pw-container">
            <input id="pw" type="password" placeholder="Password" />
            <span className="showPw">Show</span>
          </div>
          <button id="btn" onClick={this.goToMain.bind(this)}>
            Log In
          </button>
        </form>
        <div className="login-bottom">
          <hr /> OR
          <hr />
        </div>
        <span
          className="login-fb"
          onclick="location.href='https://www.facebook.com'"
        >
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
