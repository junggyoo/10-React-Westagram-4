import React, { Component } from "react";
import CommentContainer from "./CommentContainer";
import "./CommentList.scss";

class CommentList extends Component {
  render() {
    const { comments } = this.props;
    return (
      <div className="CommentList">
        {comments.map(({ id, name, text }) => (
          <CommentContainer name={name} text={text} key={id} />
        ))}
      </div>
    );
  }
}

export default CommentList;
