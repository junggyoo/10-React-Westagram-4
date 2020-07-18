import React from "react";
import Emoji from "./Emoji";
import AddComment from "./AddComment";
import HiddenComment from "./HiddenComment";
import ShownComment from "./ShownComment";

class SecondFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden: true,
      addedComment: "",
      commentToGet: [],
      hiddenComment: [
        { id: 0, user: "beatrice", comment: "OMG 😍😍😍" },
        { id: 1, user: "brufes", comment: "where is it?" },
      ],
      shownComment: [
        {
          id: 2,
          user: "flavio",
          comment: "take me there 🙌",
        },
        { id: 3, user: "imkhong", comment: "nice render" },
      ],
      showId: false,
      key: 4,
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
          <p className="comment-bold">
            {beatingHeart ? "41,339" : "41,338"} likes
          </p>
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
export default SecondFeed;
