import React from "react";
import "./Form.scss";

const CommentInputContanier = ({ value, onChange, onCreate, onKeypress }) => {
  return (
    <div className="CommentInputContanier">
      <input
        height="14px"
        value={value}
        onChange={onChange}
        onKeyPress={onKeypress}
        placeholder="댓글달기..."
      />
      <div className="createButton" onClick={value.length > 0 && onCreate}>
        게시
      </div>
    </div>
  );
};

export default CommentInputContanier;
