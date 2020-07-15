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
          {/* {this.state.recomData.map((item, i) => {
            if (i < 5) {
              return <RecomItem id={item.id} name={item.username} key={i} />;
            }
            return null;
            //가지고 있는 데이터에서 5개의 데이터만 보여주려고 할 때, 위의 if문 말고 더 나은 방식?
          })} */}
          {this.state.recomData.slice(0, 6).map((item, i) => {
            return <RecomItem id={item.id} name={item.username} key={i} />;
          })}
        </ul>
      </div>
    );
  }
}

export default RecomList;
