import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="navContainer">
          <div className="navLogo">
            <div className="navLogotext">
              <img src="/logo_text.png" alt="imgText" />
            </div>
          </div>
          <input type="text" className="navSearch" placeholder="검색" />
          <div className="navMenuContainer">
            <ul className="navMenu">
              <li className="navMenuIcon-home">
                <svg
                  aria-label="홈"
                  className="_8-yf5 "
                  fill="#262626"
                  height="22"
                  viewBox="0 0 48 48"
                  width="22"
                >
                  <path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path>
                </svg>
              </li>
              <li className="navMenuIcon-direct">
                <svg
                  aria-label="Direct"
                  className="_8-yf5 "
                  fill="#262626"
                  height="22"
                  viewBox="0 0 48 48"
                  width="22"
                >
                  <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l13.2 13c.5.4 1.1.6 1.7.3l16.6-8c.7-.3 1.6-.1 2 .5.4.7.2 1.6-.5 2l-15.6 9.9c-.5.3-.8 1-.7 1.6l4.6 19c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.5-.5.5-1.1.2-1.6z"></path>
                </svg>
              </li>
              <li className="navMenuIcon-quest">
                <svg
                  aria-label="사람 찾기"
                  className="_8-yf5 "
                  fill="#262626"
                  height="22"
                  viewBox="0 0 48 48"
                  width="22"
                >
                  <path
                    clip-rule="evenodd"
                    d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </li>
              <li className="navMenuIcon-heart">
                <svg
                  aria-label="활동 피드"
                  className="_8-yf5 "
                  fill="#262626"
                  height="22"
                  viewBox="0 0 48 48"
                  width="22"
                >
                  <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>
              </li>
              <li className="navMenuIcon-Mypage">
                <img
                  alt="juuuuungq님의 프로필 사진"
                  className="_6q-tv"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/16122754_946946655406374_308312921673302016_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&amp;_nc_ohc=2kizZdjP9j4AX_XGy76&amp;oh=99eda90986ef6c08ee1b66ac41ce8350&amp;oe=5F26B68B"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
