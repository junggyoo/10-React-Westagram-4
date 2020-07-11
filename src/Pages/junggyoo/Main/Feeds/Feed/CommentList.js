import React, { Component } from "react";
import CommentContainer from "./CommentContainer";

class CommentList extends Component {
  render() {
    const { comments } = this.props;

    const commentList = comments.map(({ id, text }) => (
      <CommentContainer id={id} text={text} key={id} />
    ));

    return <div>{commentList}</div>;
  }
}

export default CommentList;
