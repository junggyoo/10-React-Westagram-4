import React from "react";
import RecomItem from "./RecomItem";
import "./RecomList.scss";

class RecomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recomData: [],
    };
  }

  callApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => this.setState({ recomData: result }));
  };

  componentDidMount() {
    this.callApi();
  }

  render() {
    return (
      <div>
        <ul className="list-container">
          {this.state.recomData.slice(0, 6).map((item, i) => {
            return <RecomItem id={item.id} name={item.username} key={i} />;
          })}
        </ul>
      </div>
    );
  }
}

export default RecomList;
