import React, { Component } from "react";
import CommentContainer from "./CommentContainer";
import "./CommentList.scss";

class CommentList extends Component {
  render() {
    const { comments } = this.props;

    return (
      <div className="CommentList">
        {comments.map(({ id, text }) => (
          <CommentContainer id={id} text={text} key={id} />
        ))}
      </div>
    );
  }
}

export default CommentList;
