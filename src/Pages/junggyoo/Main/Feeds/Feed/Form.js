import React from "react";
import "./Form.scss";

const Form = ({ value, onChange, onCreate, onKeypress }) => {
  return (
    <div className="form">
      <input
        height="14px"
        value={value}
        onChange={onChange}
        onKeyPress={onKeypress}
        placeholder="댓글달기..."
      />
      <div className="createButton" onClick={onCreate}>
        게시
      </div>
    </div>
  );
};

export default Form;
