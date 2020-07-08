import React from 'react';
import Nav from './Nav/Nav';
import Feeds from './Feeds/Feeds';
import Right from './Right/Right';
import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <div className="mainBody">
        <Nav />
        <main>
          <section className="mainContainer">
            <Feeds />
            <Right />
          </section>
        </main>
      </div>
    );
  }
}

export default Main;
