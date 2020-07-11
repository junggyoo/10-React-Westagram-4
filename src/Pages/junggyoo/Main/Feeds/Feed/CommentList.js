import React, { Component } from "react";
import CommentContainer from "./CommentContainer";
import "./CommentList.scss";

class CommentList extends Component {
  render() {
    const { comments } = this.props;

    const commentList = comments.map(({ id, text }) => (
      <CommentContainer id={id} text={text} key={id} />
    ));

    return <div className="CommentList">{commentList}</div>;
  }
}

export default CommentList;
