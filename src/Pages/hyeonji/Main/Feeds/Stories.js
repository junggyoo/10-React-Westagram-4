import React from "react";
import "./Stories.scss";
import StoryItem from "./StoryItem";

class Stories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storyData: [
        {
          img: "/images/hyeonji/cat/cat1.jpg",
          userId: "hey1",
        },
        {
          img: "/images/hyeonji/cat/cat2.jpg",
          userId: "hey2",
        },
        {
          img: "/images/hyeonji/cat/cat3.jpg",
          userId: "hey3",
        },
        {
          img: "/images/hyeonji/cat/cat4.png",
          userId: "hey4",
        },
        {
          img: "/images/hyeonji/cat/cat10.jpeg",
          userId: "hey5",
        },
        {
          img: "/images/hyeonji/cat/cat5.jpeg",
          userId: "hey6",
        },
        {
          img: "/images/hyeonji/cat/cat6.jpg",
          userId: "hey7",
        },
        {
          img: "/images/hyeonji/cat/cat7.jpg",
          userId: "hey8",
        },
        {
          img: "/images/hyeonji/cat/cat8.jpg",
          userId: "hey9",
        },
        {
          img: "/images/hyeonji/cat/cat9.jpeg",
          userId: "hey10",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="Stories">
          <ul className="story-container">
            {this.state.storyData.map((story, i) => {
              return (
                <StoryItem img={story.img} userId={story.userId} key={i} />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Stories;
