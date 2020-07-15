import React from "react";
import "./Feeds.scss";
import Stories from "./Story/Stories";
import Feed from "./Feed";

class Feeds extends React.Component {
  render() {
    return (
      <div className="Feeds">
        <article>
          <Stories />
          <Feed />
          <Feed />
        </article>
      </div>
    );
  }
}

export default Feeds;
