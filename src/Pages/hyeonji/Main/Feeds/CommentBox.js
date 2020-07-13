import React from "react";

class CommentBox extends React.Component {
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
    return (
      <div>
        <div
          className={
            this.props.hideComment && this.props.index >= 2
              ? "each-comment-hide"
              : "each-comment"
          }
        >
          <span className="comment-id">{this.props.id}</span>{" "}
          <span>{this.props.comment}</span>
          <div className="like-heart">
            <img
              alt="x"
              onClick={() => this.props.deleteComment(this.props.num)}
              className="submit-x"
              src="/images/hyeonji/x.png"
            />{" "}
            <img
              alt="unclicked heart"
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

export default CommentBox;
