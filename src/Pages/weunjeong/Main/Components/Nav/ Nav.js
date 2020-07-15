import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      focus: false,
      keyword: "",
    };
  }

  eraseSearchImg = () => {
    this.setState({ focus: !this.state.focus });
  };

  handleKeyword = (e) => {
    this.setState({ keyword: e.target.value });
  };

  searchKeyword = (e) => {
    if (e.keyCode === 13) {
      window.open(
        `https://www.instagram.com/explore/tags/${this.state.keyword}`
      );
    }
  };

  render() {
    const { keyword, focus } = this.state;
    return (
      <nav className="nav">
        <div className="nav-icons">
          <div className="nav-left">
            <img
              className="logo-sign"
              alt="instagram-logoImg"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
            />
            <img
              className="logo-text"
              alt="instagram-logo"
              src="images/weunjeong/logo_text.png"
            />
          </div>
          <div className="nav-middle">
            <img
              id="search-img"
              alt="searchImg"
              style={{ display: focus ? "none" : "flex" }}
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
            />
            <input
              id="search"
              type="text"
              placeholder="Search"
              value={keyword}
              onChange={this.handleKeyword}
              onFocus={this.eraseSearchImg}
              onBlur={this.eraseSearchImg}
              onKeyUp={this.searchKeyword}
            />
          </div>
          <div className="nav-right">
            <img
              className="nav-find"
              alt="findImg"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            />
            <img
              className="nav-heart"
              alt="heartImg"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img
              className="nav-home"
              alt="homeImg"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            />
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;
