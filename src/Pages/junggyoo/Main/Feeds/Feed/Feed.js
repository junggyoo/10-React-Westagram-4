import React from "react";
import "./Feed.scss";
import CommentList from "./CommentList";
import Form from "./Form";

class Feed extends React.Component {
  state = {
    input: "",
    comments: [{ text: "" }],
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleCreate = () => {
    const { input, comments } = this.state;
    this.setState({
      input: "",
      comments: comments.concat({
        text: "juuuuungq  " + input,
      }),
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  render() {
    const { input, comments } = this.state;
    const { handleChange, handleCreate, handleKeyPress } = this;

    return (
      <div className="Feed">
        <article className="feed">
          <div className="feed-head">
            <div className="meta">
              <div className="profileImage">
                <img
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/16122754_946946655406374_308312921673302016_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=2kizZdjP9j4AX_XGy76&oh=d83395a02927599ff703f4a0d2f22cb7&oe=5F28DB88"
                  alt="imgProfile"
                />
              </div>
              <div className="profileInfo">
                <div className="userName">juuuuungq</div>
                <div className="location">wecode</div>
              </div>
            </div>
            <div className="feedHeadBtn">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                alt="imgBtn"
              />
            </div>
          </div>
          <div className="feedMain">
            <img
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/104294868_893779644430427_1895765650398576491_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=ObYtLllPYloAX_akic-&oh=53a3d7d160c4a69ac741a7c298770ae2&oe=5F27A88A"
              alt="imgFeed"
            />
          </div>
          <div className="socialContainer">
            <div className="socialBtns">
              <div className="socialLeftBtns">
                <button className="likeBtn">
                  <img
                    className="like"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                    alt="like"
                  />
                </button>
                <button className="speechBubbleBtn">
                  <img
                    className="speechBubble"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                    alt="speechBubble"
                  />
                </button>
                <button className="shareBtn">
                  <img
                    className="share"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                    alt="share"
                  />
                </button>
              </div>
              <div className="socialRightBts">
                <button className="bookMarkBtn">
                  <img
                    className="bookMark"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                    alt="bookMark"
                  />
                </button>
              </div>
            </div>
            <div className="LikeNumberAndUsers">좋아요 129348712890347개</div>
            <div className="contents">
              <div id="userId">juuuuungq</div>
            </div>
            <div className="replyInfo"></div>
            <div className="replyContainer">
              <CommentList comments={comments} />
            </div>
            <div className="feedTime">1시간 전</div>
            <div className="replyInput">
              <Form
                value={input}
                onKeypress={handleKeyPress}
                onChange={handleChange}
                onCreate={handleCreate}
              />
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Feed;
