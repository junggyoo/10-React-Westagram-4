import React from "react";
import Nav from "./Nav/Nav";
import Feeds from "./Feeds/Feeds";
import Right from "./Right/Right";
import "./junggyooMain.scss";

class JunggyooMain extends React.Component {
  render() {
    return (
      <div className="JunggyooMain">
        <Nav />
        <main>
          <section className="mainContainer">
            <Feeds />
            <article className="mainRight">
              <Right />
            </article>
          </section>
        </main>
      </div>
    );
  }
}

export default JunggyooMain;
