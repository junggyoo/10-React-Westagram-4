import React from "react";
import "./Comment.scss";

class Comment extends React.Component {
  render() {
    return (
      <div className="div_wrap_screen_comment">
        <div className="div_screen_comment">
          <span className="span_comment_id">
            <a href="others">wecode</a>
          </span>
          <span className="screen_comment">{this.props.comment}</span>
        </div>
      </div>
    );
  }
}

export default Comment;
