import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
        <nav>
          <div className="nav-container">
            <div className="nav-left-box">
              <img alt="logo text" src="/images/hyeonji/logo_text.png" />
            </div>
            <div className="search-box">
              <input type="search" placeholder="👀검색" />
            </div>
            <div className="nav-right-box">
              <div className="icon-box">
                <img
                  alt="compass"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                />
                <img
                  alt="heart logo"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                />
                <img
                  alt="my page"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                />
                <img
                  alt="compass"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                />
                <img
                  alt="compass"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
