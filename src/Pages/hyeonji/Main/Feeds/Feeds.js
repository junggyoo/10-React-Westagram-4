import React from "react";
import "./Feeds.scss";

class Feeds extends React.Component {
  render() {
    return (
      <div className="Feeds">
        <article>
          <div className="story">
            <ul className="story-container"></ul>
          </div>
          <div className="feed">
            <div className="first feed">
              <header>
                <div className="header-container">
                  <div className="header-profile">
                    <img
                      alt="wecode bootcamp"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=jUj_89RJjeIAX_XJyCT&oh=6ff457be49f1bf23dac96d4f93196a4b&oe=5F23E3F0"
                    />
                  </div>
                  <div className="header-content">
                    <div className="profile-info">
                      <span>hyun._.jiya</span>
                      <span>seoul, korea</span>
                    </div>
                    <div className="three-dots">
                      <img
                        alt="more"
                        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                      />
                    </div>
                  </div>
                </div>
              </header>
              <div className="feed-container">
                <div className="feed-img">
                  <img alt="feed img" src="/images/hyeonji/feed.jpg" />
                </div>
              </div>
              <div className="feed-bottom">
                <div className="bookmark-bar">
                  <div className="icon-container">
                    <img
                      className="like-feed"
                      alt="heart icon"
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                    />
                    <img
                      alt=""
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                    />
                    <img
                      alt="sharing"
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                    />
                  </div>
                  <div className="img-container">
                    <img
                      alt="bookmark"
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                    />
                  </div>
                </div>
                <div className="like">
                  <span>좋아요 4개</span>
                </div>
                <div className="content">
                  <div className="content-box">
                    <div className="feed-content">
                      <div className="content-id">wjdwbsl</div>
                      <div className="content-text">
                        5개월만에 운동을 다시 시작할 때가 온 것 같다 #일상#div
                      </div>
                    </div>
                  </div>
                  <div className="comment-box"></div>
                </div>
                <div className="time-stamp">
                  <span>11시간 전</span>
                </div>
                <div className="comment-imput">
                  <form id="submit-comment-container">
                    <input
                      id="submit"
                      className=""
                      type="search"
                      value=""
                      placeholder="댓글 달기..."
                    />
                    <input type="submit" value="게시" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Feeds;
