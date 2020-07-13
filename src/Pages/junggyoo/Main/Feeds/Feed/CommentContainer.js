import React, { Component } from "react";
import "./CommentContainer.scss";

class CommentContainer extends Component {
  render() {
    const { id, text } = this.props;
    return (
      <div className="CommentContainer">
        <div className="id">{id}</div>
        <div className="text">{text}</div>
      </div>
    );
  }
}

export default CommentContainer;
