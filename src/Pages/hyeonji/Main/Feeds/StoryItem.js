import React from "react";
import "./StoryItem.scss";

class StoryItem extends React.Component {
  render() {
    return (
      <div>
        <li className="story-list">
          <div className="story-border">
            <img alt="story" src={this.props.img} />
          </div>
          <span className="story-user-id">{this.props.userId}</span>
        </li>
      </div>
    );
  }
}

export default StoryItem;
