import React from "react";
import "./Comment.scss";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heartState: false,
    };
  }

  handleCommentLikeState = () => {
    this.setState({ heartState: !this.state.heartState });
  };

  render() {
    const { hideComment, comment, deleteComment, num, id } = this.props;
    return (
      <div className="Comment">
        <div
          className={
            hideComment && num >= 2 ? "each-comment-hide" : "each-comment"
          }
        >
          <span className="comment-id">{id}</span> <span>{comment}</span>
          <div className="like-heart">
            <img
              alt="x"
              onClick={() => deleteComment(num)}
              className="submit-x"
              src="/images/hyeonji/x.png"
            />{" "}
            <img
              alt="small heart icon"
              onClick={this.handleCommentLikeState}
              className="submit-heart"
              src={
                this.state.heartState
                  ? "/images/hyeonji/red_heart.jpeg"
                  : "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
