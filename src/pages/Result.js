import React from "react";
import "./Result.scss";

export default class Result extends React.Component {
  render() {
    const {
      match: {
        params: { winner }
      }
    } = this.props;

    const winPlayer = !winner
      ? "Draw"
      : `Winner player ${winner === "1" ? "X" : "O"}`;

    return (
      <div className="container">
        <h1>Congratulation!!!</h1>
        <h2>{winPlayer}</h2>
        <a className="btn" href="/game">
          START AGAIN
        </a>
        <a className="btn" href="/">
          MAIN PAGE
        </a>
      </div>
    );
  }
}
