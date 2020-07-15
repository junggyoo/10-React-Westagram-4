import React from "react";

class ShownComment extends React.Component {
  render() {
    return this.props.shownComment.map((content) => (
      <div className="comment-line" id={content.id}>
        <div className="line-left">
          <span className="comment-id">{content.user}</span>
          <span className="comment-content">&nbsp;&nbsp;{content.comment}</span>
        </div>
        <div className="line-right">
          <img
            className="comment-delete"
            alt="deleteImg"
            src="images/weunjeong/close-button.png"
            onClick={this.props.deleteShownComment}
          />
          <img
            className="comment-heart"
            alt="heart"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          />
        </div>
      </div>
    ));
  }
}
export default ShownComment;
