import React from "react";
import Emoji from "./Emoji";
import AddComment from "./AddComment";
import "./Feeds.scss";

class SecondFeed extends React.Component {
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
          <button className="footer-btn" onClick={this.showComments}>
            {this.state.hidden ? "View 2 more comments" : "Hide comments"}
          </button>
          <br />
          <div
            className={
              this.state.hidden ? "hidden-comment" : "show-hidden-comment"
            }
          >
            <div className="comment-line">
              <div className="line-left">
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
                <span className="comment-content">&nbsp;&nbsp;nice render</span>
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
export default SecondFeed;
