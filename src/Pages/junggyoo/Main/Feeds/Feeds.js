import React from "react";
import Feed from "./Feed/Feed";
import "./Feeds.scss";

class Feeds extends React.Component {
  render() {
    return (
      <div className="Feeds">
        <div className="feeds">
          <Feed />
        </div>
      </div>
    );
  }
}

export default Feeds;
