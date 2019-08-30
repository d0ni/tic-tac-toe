import React from "react";

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
      <>
        <div>Congratulation!!!</div>
        <div>{winPlayer}</div>
        <a href="/game">Start again</a>
      </>
    );
  }
}
