import React from "react";

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>TIC TAC TOE</h2>
        <a className="btn " href="/game">
          NEW GAME
        </a>
      </div>
    );
  }
}
