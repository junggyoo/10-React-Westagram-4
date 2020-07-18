import React from "react";
import "./Right.scss";
import RecomList from "./Recommendation/RecomList";

class Right extends React.Component {
  render() {
    return (
      <div className="Right">
        <div className="feed-right">
          <div className="side-profile">
            <div className="container">
              <div className="user-img">
                <img
                  alt="my profile"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/17882650_1897373507218922_5665567046067290112_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=YDY0gaOL168AX-zxqjH&oh=69916108cfd098a2e537dff3968cf40b&oe=5F2486BC"
                />
              </div>
              <div className="user-info">
                <div className="user-id">hyun_jiya</div>
                <div className="user-name">IM HYEONJI</div>
              </div>
            </div>
          </div>
          <div className="side-recommend">
            <div className="top padding-side-group padding-top-bottom-8px">
              <div className="text-left">회원님을 위한 추천</div>
              <div className="text-right">모두 보기</div>
            </div>
            <div className="side-recommend-bottom padding-side-group">
              <div className="list-wrap padding-top-bottom-8px">
                <RecomList />
              </div>
            </div>
          </div>
          <div className="side-underInfo">
            <div>
              <ul className="quick-menu">
                <li>소개</li>
                <li>도움말</li>
                <li>홍보</li>
                <li>센터</li>
                <li>API</li>
                <li>채용</li>
                <li>정보</li>
                <li>개인정보처리방침</li>
                <li>약관</li>
                <li>위치</li>
                <li>인기 계정</li>
                <li>해시 태그</li>
                <li>언어</li>
              </ul>
              <div className="copyright">© 2020 WESTAGRAM FROM HYEONJI</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Right;
