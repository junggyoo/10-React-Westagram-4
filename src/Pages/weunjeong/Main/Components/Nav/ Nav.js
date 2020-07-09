import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
  render() {
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
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
            />
            <input
              id="search"
              type="text"
              placeholder="Search"
              onfocus="eraseImg()"
              onfocusout="showImg()"
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
