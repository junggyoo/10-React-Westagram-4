import React from "react";
import Emoji from "./Emoji";
import AddComment from "./AddComment";
import "./Feeds.scss";

class FirstFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden: true,
      addedComment: "",
      commentToGet: [],
      showId: false,
      key: 0,
    };
  }

  showComments = () => {
    const { hidden } = this.state;
    hidden
      ? this.setState({
          hidden: !hidden,
        })
      : this.setState({
          hidden: !hidden,
        });
  };

  handleComment = (e) => {
    this.setState({
      addedComment: e.target.value,
    });
  };

  getComment = () => {
    const { addedComment, key, commentToGet } = this.state;
    this.setState({
      showId: true,
      addedComment: "",
      key: key + 1,
    });
    const test = { id: key, comment: addedComment };
    commentToGet.push(test);
  };

  pressKeyToPost = (e) => {
    if (this.state.addedComment.length !== 0 && e.key === "Enter") {
      this.getComment();
    }
  };

  render() {
    const activatePost = this.state.addedComment.length !== 0;
    return (
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
          <br />
          <button className="footer-btn" onClick={this.showComments}>
            {this.state.hidden ? "View 3 more comments" : "Hide comments"}
          </button>
          <div
            className={
              this.state.hidden ? "hidden-comment" : "show-hidden-comment"
            }
          >
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
                  &nbsp;&nbsp;우리 강아지랑 얼른 같이 보자 <Emoji symbol="🙌" />
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
          <AddComment
            commentToGet={this.state.commentToGet}
            myId={this.state.showId}
          />
        </div>
        <div className="write-comment">
          <input
            className="write"
            type="text"
            placeholder="Add a comment..."
            onChange={this.handleComment}
            value={this.state.addedComment}
            onKeyUp={this.pressKeyToPost}
          />
          <button
            className="article-btn"
            style={{ color: activatePost ? "#0095f6" : "#c0e0fd" }}
            onClick={this.getComment}
          >
            Post
          </button>
        </div>
      </article>
    );
  }
}

export default FirstFeed;
