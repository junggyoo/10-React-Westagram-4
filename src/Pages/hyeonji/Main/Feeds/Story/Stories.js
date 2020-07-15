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
          userId: "cat1",
        },
        {
          img: "/images/hyeonji/cat/cat2.jpg",
          userId: "cat2",
        },
        {
          img: "/images/hyeonji/cat/cat3.jpg",
          userId: "cat3",
        },
        {
          img: "/images/hyeonji/cat/cat4.png",
          userId: "cat4",
        },
        {
          img: "/images/hyeonji/cat/cat10.jpeg",
          userId: "cat5",
        },
        {
          img: "/images/hyeonji/cat/cat5.jpeg",
          userId: "cat6",
        },
        {
          img: "/images/hyeonji/cat/cat6.jpg",
          userId: "cat7",
        },
        {
          img: "/images/hyeonji/cat/cat7.jpg",
          userId: "cat",
        },
        {
          img: "/images/hyeonji/cat/cat8.jpg",
          userId: "cat9",
        },
        {
          img: "/images/hyeonji/cat/cat9.jpeg",
          userId: "cat10",
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
