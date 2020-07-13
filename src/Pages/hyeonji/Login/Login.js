import React from "react";
import "./Login.scss";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
      isBtnValid: false,
      isIdValid: false,
    };
  }

  handleId = (e) => {
    this.setState({ id: e.target.value }, () => this.checkBtnValidate());
  };

  handlePassword = (e) => {
    this.setState({ password: e.target.value }, () => this.checkBtnValidate());
  };

  checkBtnValidate = () => {
    const { id, password } = this.state;
    if (id !== "" && password !== "") {
      this.setState({ isBtnValid: true });
      if (id.includes("@")) {
        this.setState({ isIdValid: true });
      }
    } else {
      this.setState({ isBtnValid: false });
    }
  };

  goToMain = () => {
    if (this.state.isIdValid) {
      this.props.history.push("/main-hyeonji");
    }
  };

  render() {
    return (
      <div className="Login">
        <div className="container">
          <div className="img-container">
            <img alt="logo" src="/images/hyeonji/logo_text.png" />
          </div>
          <form className="input-box">
            <input
              type="text"
              id="loginId"
              className="box"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={this.state.id}
              onChange={this.handleId}
            />
            <input
              type="password"
              id="loginPw"
              className="box"
              placeholder="비밀번호"
              value={this.state.password}
              onChange={this.handlePassword}
            />
            <button
              id="btn"
              className="box"
              onClick={this.goToMain}
              style={{
                backgroundColor: this.state.isBtnValid ? "#1495F6" : "#b3dffd",
              }}
            >
              로그인
            </button>
          </form>
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
