import React from "react";
import Emoji from "./Emoji";
import "./Feeds.scss";

class Feeds extends React.Component {
  render() {
    return (
      <div className="feeds">
        <article className="article">
          <header className="article-header">
            <div className="circle">
              <img
                className="profile"
                alt="claire_bbo"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/73401881_420319365543860_3290750899349094400_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=dtt6Q9uYjBYAX-5gkEw&oh=f987dea1c32537b1ea9860a60fc3c961&oe=5F248A3F"
              />
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
              >
                <circle cx="50" cy="50" r="23" />
              </svg>
            </div>
            <div className="article-name">
              <p className="header-id">claire_bbo</p>
              <p className="header-location">서울 어딘가</p>
            </div>
            <img
              className="profile-dots"
              alt="dots"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
            />
          </header>
          <img
            className="article-pic"
            alt="lizImg"
            src="/images/weunjeong/liz.jpg"
          />
          <footer>
            <div className="footer-left">
              <img
                className="article-heart"
                alt="heartImg"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
              <img
                className="article-balloon"
                alt="balloonImg"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
              />
              <img
                className="article-share"
                alt="share"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
              />
            </div>
            <div className="footer-right">
              <img
                className="article-bookmark"
                alt="bookmarkImg"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
              />
            </div>
          </footer>
          <div className="footer-text">
            <p className="comment-bold">97 likes</p>
            <span className="comment-bold">claire_bbo</span>
            <span className="comment-regular">
              &nbsp;&nbsp;My precious baby <Emoji symbol="🐶" />
              <Emoji symbol="👻" />
              <Emoji symbol="💕" />
            </span>
            <span className="comment-blue">#dogstagram #puppy #ilovedogs</span>
            <button className="footer-btn">View 3 more comments</button>
            <div className="hidden-comment">
              <div className="comment-line">
                <div className="line-left">
                  <span className="comment-id">claire_bbo</span>
                  <span className="comment-content">
                    &nbsp;&nbsp;예쁜 내 새꾸
                  </span>
                </div>
                <div className="line-right">
                  <img
                    className="comment-delete"
                    alt="deleteImg"
                    src="images/weunjeong/close-button.png"
                  />
                  <img
                    className="comment-heart"
                    alt="heartImg"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                  <br />
                </div>
              </div>
              <div className="comment-line">
                <div className="line-left">
                  <span className="comment-id">naririn_kim</span>
                  <span className="comment-content">
                    &nbsp;&nbsp;리즈 만나보고 싶어~
                  </span>
                </div>
                <div className="line-right">
                  <img
                    className="comment-delete"
                    alt="deleteImg"
                    src="images/weunjeong/close-button.png"
                  />
                  <img
                    className="comment-heart"
                    alt="heartImg"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                  <br />
                </div>
              </div>
              <div className="comment-line">
                <div className="line-left">
                  <span className="comment-id">minjuuuuuya</span>
                  <span className="comment-content">
                    &nbsp;&nbsp;산책가즈아아
                  </span>
                </div>
                <div className="line-right">
                  <img
                    className="comment-delete"
                    alt="deleteImg"
                    src="images/weunjeong/close-button.png"
                  />
                  <img
                    className="comment-heart"
                    alt="heart"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                </div>
              </div>
            </div>
            <div className="shown-comment">
              <div className="comment-line">
                <div className="line-left">
                  <span className="comment-id">yeadore__j</span>
                  <span className="comment-content">
                    &nbsp;&nbsp;우리 강아지랑 얼른 같이 보자{" "}
                    <Emoji symbol="🙌" />
                  </span>
                </div>
                <div className="line-right">
                  <img
                    className="comment-delete"
                    alt="deleteImg"
                    src="images/weunjeong/close-button.png"
                  />
                  <img
                    className="comment-heart"
                    alt="heartImg"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                  <br />
                </div>
              </div>
              <div className="comment-line">
                <div className="line-left">
                  <span className="comment-id">dyo.neee</span>
                  <span className="comment-content">
                    &nbsp;&nbsp;엄청 귀여워!!
                    <Emoji symbol="🥰" />
                  </span>
                </div>
                <div className="line-right">
                  <img
                    className="comment-delete"
                    alt="deleteImg"
                    src="images/weunjeong/close-button.png"
                  />
                  <img
                    className="comment-heart"
                    alt="heart"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="write-comment">
            <input
              className="write"
              type="text"
              placeholder="Add a comment..."
            />
            <button className="article-btn">Post</button>
          </div>
        </article>
        <article className="article">
          <header className="article-header">
            <div className="circle">
              <img
                className="profile"
                alt="c__l__o"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/102363989_614478005823062_7845849771970273989_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=rESjmGxwhlAAX8noRSa&oh=34d3e11ee1a102306c124456d382407a&oe=5F2884C3"
              />
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
              >
                <circle cx="50" cy="50" r="23" />
              </svg>
            </div>
            <div className="article-name">
              <p className="header-id">c__l__o</p>
              <p className="header-location">Sicily, Italy</p>
            </div>
            <img
              className="profile-dots"
              alt="dots"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
            />
          </header>
          <img
            className="article-pic"
            alt="c__l__o"
            src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/106262813_289277349099881_8389144474537401093_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=sl14QC2Ew1QAX-yfkk1&oh=b7d23d857031362380c74108274d9839&oe=5F280C34"
          />
          <footer>
            <div className="footer-left">
              <img
                className="article-heart"
                alt="heartImg"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
              <img
                className="article-balloon"
                alt="balloonImg"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
              />
              <img
                className="article-share"
                alt="shareImg"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
              />
            </div>
            <div className="footer-right">
              <img
                className="article-bookmark"
                alt="bookmarkImg"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
              />
            </div>
          </footer>
          <div className="footer-text">
            <p className="comment-bold">41,338 Likes</p>
            <span className="comment-bold">c__l__o</span>
            <span className="comment-regular">
              &nbsp;&nbsp;Villa Saraceni at Scala dei Turchi, Sicily, Italy{" "}
              <Emoji symbol="🍋" />
              Patio of home designed in collaboration between
              <span className="comment-blue">@charlottetaylr</span>&
              <span className="comment-blue">@creamatelier</span>
              <Emoji symbol="🍋" /> via
              <span className="comment-blue">
                @charlottetaylr @maison_de_sable
              </span>
              June 2020
            </span>
            <br />
            <button className="footer-btn">View 2 more comments</button>
            <br />
            <div className="hidden-comment">
              <div className="comment-line">
                <div class="line-left">
                  <span className="comment-id">beatrice</span>
                  <span className="comment-content">
                    &nbsp;&nbsp;OMG
                    <Emoji symbol="😍" />
                    <Emoji symbol="😍" />
                    <Emoji symbol="😍" />
                  </span>
                </div>
                <div className="line-right">
                  <img
                    className="comment-delete"
                    alt="deleteImg"
                    src="images/weunjeong/close-button.png"
                  />
                  <img
                    className="comment-heart"
                    alt="heartImg"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                </div>
              </div>
              <div className="comment-line">
                <div className="line-left">
                  <span className="comment-id">brufes</span>
                  <span className="comment-content">
                    &nbsp;&nbsp;where is it?
                  </span>
                </div>
                <div className="line-right">
                  <img
                    className="comment-delete"
                    alt="deleteImg"
                    src="images/weunjeong/close-button.png"
                  />
                  <img
                    className="comment-heart"
                    alt="heartImg"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                </div>
              </div>
            </div>
            <div className="shown-comment">
              <div className="comment-line">
                <div className="line-left">
                  <span className="comment-id">flavio</span>
                  <span className="comment-content">
                    &nbsp;&nbsp;take me there <Emoji symbol="🙌" />
                  </span>
                </div>
                <div className="line-right">
                  <img
                    className="comment-delete"
                    alt="deleteImg"
                    src="images/weunjeong/close-button.png"
                  />
                  <img
                    className="comment-heart"
                    alt="heartImg"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                </div>
              </div>
              <div className="comment-line">
                <div className="line-left">
                  <span className="comment-id">imkhong</span>
                  <span className="comment-content">
                    &nbsp;&nbsp;nice render
                  </span>
                </div>
                <div className="line-right">
                  <img
                    className="comment-delete"
                    alt="deleteImg"
                    src="images/weunjeong/close-button.png"
                  />
                  <img
                    className="comment-heart"
                    alt="heartImg"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="write-comment">
            <input
              className="write"
              type="text"
              placeholder="Add a comment..."
            />
            <button className="article-btn">Post</button>
          </div>
        </article>
        <article className="article">
          <header className="article-header">
            <div className="circle">
              <img
                className="profile"
                alt="myexterior"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/11875466_390435371165383_1348837967_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=yRyDV7tCFCEAX8cbmPj&oh=50e6c205811bc28fc51b1ad8926c7aae&oe=5F273C2E"
              />
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
              >
                <circle cx="50" cy="50" r="23" />
              </svg>
            </div>
            <div className="article-name">
              <p className="header-id">myexterior</p>
              <p className="header-location">Utah</p>
            </div>
            <img
              className="profile-dots"
              alt="dots"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
            />
          </header>
          <img
            className="article-pic"
            alt="myexterior"
            src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/105033894_3174277899326720_6453038383660757303_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=AYcnnsKCEm0AX958nIP&oh=6e090e526d1d0a58af4faca28180b202&oe=5F26A243"
          />
          <footer>
            <div className="footer-left">
              <img
                className="article-heart"
                alt="heartImg"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
              <img
                className="article-balloon"
                alt="balloonImg"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
              />
              <img
                className="article-share"
                alt="shareImg"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
              />
            </div>
            <div className="footer-right">
              <img
                className="article-bookmark"
                alt="bookmarkImg"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
              />
            </div>
          </footer>
          <div className="footer-text">
            <p className="comment-bold">6,152 likes</p>
            <span className="comment-bold">myexterior</span>
            <span className="comment-regular">
              &nbsp;&nbsp;Pedaling in Utah, USA <Emoji symbol="🇺🇸" />
              <Emoji symbol="📸" /> by
            </span>
            <span className="comment-blue">@giveusthisdane</span>
            <div className="shown-comment">
              <div className="comment-line">
                <div className="line-left">
                  <span className="comment-id">briobooob</span>
                  <span className="comment-content">
                    &nbsp;&nbsp;
                    <Emoji symbol="🙌" />
                  </span>
                </div>
                <div className="line-right">
                  <img
                    className="comment-delete"
                    alt="deleteImg"
                    src="images/weunjeong/close-button.png"
                  />
                  <img
                    className="comment-heart"
                    alt="heartImg"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                </div>
              </div>
              <div className="comment-line">
                <div className="line-left">
                  <span className="comment-id">linvinkdi</span>
                  <span className="comment-content">
                    &nbsp;&nbsp;bucketlist
                  </span>
                </div>
                <div className="line-right">
                  <img
                    className="comment-delete"
                    alt="deleteImg"
                    src="images/weunjeong/close-button.png"
                  />
                  <img
                    className="comment-heart"
                    alt="heartImg"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="write-comment">
            <input
              className="write"
              type="text"
              placeholder="Add a comment..."
            />
            <button className="article-btn">Post</button>
          </div>
        </article>
      </div>
    );
  }
}

export default Feeds;
