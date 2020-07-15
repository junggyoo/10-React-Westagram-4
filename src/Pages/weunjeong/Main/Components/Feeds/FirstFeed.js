import React from "react";
import Emoji from "./Emoji";
import AddComment from "./AddComment";
import HiddenComment from "./HiddenComment";
import ShownComment from "./ShownComment";
import "./Feeds.scss";

class FirstFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden: true,
      addedComment: "",
      commentToGet: [],
      hiddenComment: [
        { id: 0, user: "claire_bbo", comment: "예쁜 내 새꾸" },
        { id: 1, user: "naririn_kim", comment: "리즈 만나보고 싶어~" },
        { id: 2, user: "minjuuuuuya", comment: "산책가즈아아" },
      ],
      shownComment: [
        {
          id: 3,
          user: "yeadore__j",
          comment: "우리 강아지랑 얼른 같이 보자 🙌",
        },
        { id: 4, user: "dyo_nee", comment: "엄청 귀여워!! 🥰" },
      ],
      showId: false,
      key: 5,
      beatingHeart: false,
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

  deleteComment = (e) => {
    const targetKey = e.target.parentNode.parentNode.id;
    const result = this.state.commentToGet.filter(
      (content) => content.id !== Number(targetKey)
    );
    this.setState({ commentToGet: result });
  };

  deleteHiddenComment = (e) => {
    const currentKey = e.target.parentNode.parentNode.id;
    const currentResult = this.state.hiddenComment.filter(
      (content) => content.id !== Number(currentKey)
    );
    this.setState({ hiddenComment: currentResult });
  };

  deleteShownComment = (e) => {
    const shownKey = e.target.parentNode.parentNode.id;
    const shownResult = this.state.shownComment.filter(
      (content) => content.id !== Number(shownKey)
    );
    this.setState({ shownComment: shownResult });
  };

  likeHeart = () => {
    this.setState({ beatingHeart: !this.state.beatingHeart });
  };

  render() {
    const {
      hidden,
      addedComment,
      commentToGet,
      hiddenComment,
      shownComment,
      beatingHeart,
      showId,
    } = this.state;
    const activatePost = addedComment.length !== 0;
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
            <div className="heart-container">
              <img
                className={
                  beatingHeart ? "article-heart-hidden" : "article-heart"
                }
                onClick={this.likeHeart}
                alt="heartImg"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
              <svg
                className={
                  beatingHeart ? "beating-heart" : "beating-heart-hidden"
                }
                width="60"
                height="60"
                viewBox="20 90 160 160"
                onClick={this.likeHeart}
              >
                <g transform="translate(100 100)">
                  <path
                    transform="translate(-50 -50)"
                    fill="tomato"
                    d="M92.71,7.27L92.71,7.27c-9.71-9.69-25.46-9.69-35.18,0L50,14.79l-7.54-7.52C32.75-2.42,17-2.42,7.29,7.27v0 c-9.71,9.69-9.71,25.41,0,35.1L50,85l42.71-42.63C102.43,32.68,102.43,16.96,92.71,7.27z"
                  ></path>
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    values="1; 1.5; 1.25; 1.5; 1.5; 1;"
                    dur="1s"
                    repeatCount="indefinite"
                    additive="sum"
                  ></animateTransform>
                </g>
              </svg>
            </div>
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
          <p className="comment-bold">{beatingHeart ? "98" : "97"} likes</p>
          <span className="comment-bold">claire_bbo</span>
          <span className="comment-regular">
            &nbsp;&nbsp;My precious baby <Emoji symbol="🐶" />
            <Emoji symbol="👻" />
            <Emoji symbol="💕" />
          </span>
          <span className="comment-blue">#dogstagram #puppy #ilovedogs</span>
          <br />
          {/* 조건을 만족하면 무조건 보여주고 아니면 안보여준다 */}
          {(hiddenComment.length > 0 || shownComment.length > 0) && (
            <button className="footer-btn" onClick={this.showComments}>
              {hidden ? "View more comments" : "Hide comments"}
            </button>
          )}
          <div className={hidden ? "hidden-comment" : "show-hidden-comment"}>
            <HiddenComment
              hiddenComment={hiddenComment}
              deleteHiddenComment={this.deleteHiddenComment}
            />
          </div>
          <div className="shown-comment">
            <ShownComment
              shownComment={shownComment}
              deleteShownComment={this.deleteShownComment}
            />
          </div>
          <AddComment
            deleteComment={this.deleteComment}
            commentToGet={commentToGet}
            myId={showId}
          />
        </div>
        <div className="write-comment">
          <input
            className="write"
            type="text"
            placeholder="Add a comment..."
            onChange={this.handleComment}
            value={addedComment}
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
