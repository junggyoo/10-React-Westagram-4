import React from "react";
import "./StoryItem.scss";

class StoryItem extends React.Component {
  render() {
    const { img, userId } = this.props;
    return (
      <div>
        <li className="story-list">
          <div className="story-border">
            <img alt="story" src={img} />
          </div>
          <span className="story-user-id">{userId}</span>
        </li>
      </div>
    );
  }
}

export default StoryItem;
