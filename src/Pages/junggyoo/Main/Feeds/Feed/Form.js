import React from "react";
import "./Form.scss";

const Form = ({ value, onChange, onCreate, onKeypress }) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeypress} />
      <div className="createButton" onClick={onCreate}>
        게시
      </div>
    </div>
  );
};

export default Form;
