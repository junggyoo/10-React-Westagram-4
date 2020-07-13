import React from "react";
import Emoji from "./Emoji";
import AddComment from "./AddComment";
import "./Feeds.scss";

class ThirdFeed extends React.Component {
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
                <span className="comment-content">&nbsp;&nbsp;bucketlist</span>
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
export default ThirdFeed;
