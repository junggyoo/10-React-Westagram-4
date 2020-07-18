import React from "react";
import "./RecomItem.scss";

class RecomItem extends React.Component {
  render() {
    return (
      <div>
        <div className="area-label padding-top-bottom-8px">
          <div className="label-left">
            <div className="friend-img-box">
              <img
                src={`https://robohash.org/${this.props.id}?set=set2&size=180x180`}
                alt="friend"
              />
            </div>
          </div>
          <div className="label-center">
            <div className="friend-id">{this.props.name}</div>
            <span className="friend-info">회원님을 팔로우안해!!</span>
          </div>
          <div className="label-right">
            <button className="follow" type="button">
              팔로우
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default RecomItem;
