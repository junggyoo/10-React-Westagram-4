import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class WeunLoginBox extends React.Component {
  goToMain = () => {
    this.props.history.push("/main-weunjeong");
  };

  constructor() {
    super();
    this.state = {
      id: "",
      password: "",
    };
  }

  handleIdChange = (e) => {
    this.setState({ id: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
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
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
            <span className="showPw">Show</span>
          </div>
          <button
            id="btn"
            onClick={this.goToMain}
            style={{ backgroundColor: activateBtn ? "#055cb1" : "#c0dffd" }}
          >
            Log In
          </button>
        </form>
        <div className="login-bottom">
          <hr /> OR
          <hr />
        </div>
        <span
          className="login-fb"
          // onClick="location.href='https://www.facebook.com'"
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
