import React from "react";
import "./Main.scss";
// import feed_img from "../../../../../public/images/hyeonji/feed.jpg";
import Nav from "./Nav/Nav";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <main>
          <div className="wrapper">
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
                      <div className="bookmark-img-container">
                        <img
                          alt="bookmark"
                          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                        />
                      </div>
                    </div>
                    <div className="like">
                      <span>좋아요 4개</span>
                    </div>
                    <div className="comment">
                      <div className="content-box">
                        <div className="feed-content">
                          <div className="content-id">wjdwbsl</div>
                          <div className="content-text">
                            5개월만에 운동을 다시 시작할 때가 온 것 같다
                            #일상#div
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
                          id="submit-comment"
                          className=""
                          type="search"
                          value=""
                          placeholder="댓글 달기..."
                        />
                        <input
                          className="submit-btn"
                          type="submit"
                          value="게시"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <div className="feed-right">
              <div className="side-profile">
                <div className="side-profile-container">
                  <div className="user-img side-user-img">
                    <img
                      alt="my image"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/17882650_1897373507218922_5665567046067290112_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=YDY0gaOL168AX-zxqjH&oh=69916108cfd098a2e537dff3968cf40b&oe=5F2486BC"
                    />
                  </div>
                  <div className="user-info-container">
                    <div className="user-id">hyun_jiya</div>
                    <div className="user-name">IM HYEONJI</div>
                  </div>
                </div>
              </div>
              <div className="side-recommend">
                <div className="side-recommend-top padding-side-group padding-top-bottom-8px">
                  <div className="recommend-text-left grey-font">
                    회원님을 위한 추천
                  </div>
                  <div className="recommend-text-right">모두 보기</div>
                </div>
                <div className="side-recommend-bottom padding-side-group">
                  <div className="recommend-list-wrap padding-top-bottom-8px">
                    <div className="recommend-list-container">
                      <div className="area-label padding-top-bottom-8px">
                        <div className="label-left">
                          <div className="friend-img-box">
                            <img
                              alt="friend img"
                              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/72983972_1354692188074509_5399379255702215673_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=HzX5G4f5DfEAX8dS8wG&oh=7aa45ad02246efa32fe48bbaf2e530c4&oe=5F22AB1B"
                            />
                          </div>
                        </div>
                        <div className="label-center">
                          <span className="friend-id">hyenn_yy.pic</span>
                          <span className="friend-info">
                            회원님을 팔로우안해!!
                          </span>
                        </div>
                        <div className="label-right">
                          <button className="follow" type="button">
                            팔로우
                          </button>
                        </div>
                      </div>
                      <div className="area-label padding-top-bottom-8px">
                        <div className="label-left">
                          <div className="friend-img-box">
                            <img
                              alt="friend img"
                              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/72983972_1354692188074509_5399379255702215673_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=HzX5G4f5DfEAX8dS8wG&oh=7aa45ad02246efa32fe48bbaf2e530c4&oe=5F22AB1B"
                            />
                          </div>
                        </div>
                        <div className="label-center">
                          <span className="friend-id">hyenn_yy.pic</span>
                          <span className="friend-info">
                            회원님을 팔로우안해!!
                          </span>
                        </div>
                        <div className="label-right">
                          <button className="follow" type="button">
                            팔로우
                          </button>
                        </div>
                      </div>
                      <div className="area-label padding-top-bottom-8px">
                        <div className="label-left">
                          <div className="friend-img-box">
                            <img
                              alt="friend img"
                              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/75265142_746444945872414_7461364860471738368_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=TKuM0YUmyXoAX-NeNgJ&oh=728758c13658353f7eab4ea5ea33f710&oe=5F23B720"
                            />
                          </div>
                        </div>
                        <div className="label-center">
                          <span className="friend-id">yanyan_hahm</span>
                          <span className="friend-info">
                            회원님을 팔로우합니다
                          </span>
                        </div>
                        <div className="label-right">
                          <button className="follow" type="button">
                            팔로우
                          </button>
                        </div>
                      </div>
                      <div className="area-label padding-top-bottom-8px">
                        <div className="label-left">
                          <div className="friend-img-box">
                            <img
                              alt="friend img"
                              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/75265142_746444945872414_7461364860471738368_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=TKuM0YUmyXoAX-NeNgJ&oh=728758c13658353f7eab4ea5ea33f710&oe=5F23B720"
                            />
                          </div>
                        </div>
                        <div className="label-center">
                          <span className="friend-id">yanyan_hahm</span>
                          <span className="friend-info">
                            회원님을 팔로우합니다
                          </span>
                        </div>
                        <div className="label-right">
                          <button className="follow" type="button">
                            팔로우
                          </button>
                        </div>
                      </div>
                      <div className="area-label padding-top-bottom-8px">
                        <div className="label-left">
                          <div className="friend-img-box">
                            <img
                              alt="friend img"
                              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/75265142_746444945872414_7461364860471738368_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=TKuM0YUmyXoAX-NeNgJ&oh=728758c13658353f7eab4ea5ea33f710&oe=5F23B720"
                            />
                          </div>
                        </div>
                        <div className="label-center">
                          <span className="friend-id">yanyan_hahm</span>
                          <span className="friend-info">
                            회원님을 팔로우합니다
                          </span>
                        </div>
                        <div className="label-right">
                          <button className="follow" type="button">
                            팔로우
                          </button>
                        </div>
                      </div>
                    </div>
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
                  <div>2020 Westagram from hyeonji</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
