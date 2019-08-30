import React from "react";
import "./game.scss";
import tic from "../icons/tic.svg";
import tac from "../icons/tac.svg";

export default class Game extends React.Component {
  state = {
    turn: 1,
    field: [0, 0, 0, 0, 0, 0, 0, 0, 0]
  };

  changeState = (pos, val) => () => {
    const { field } = this.state;
    let arr = field;
    if (!arr[pos]) {
      arr[pos] = val;

      const ans = { turn: val === 1 ? 2 : 1, field: arr };
      this.setState(ans);
      localStorage.setItem("game-data", JSON.stringify(ans));
    }
  };

  findWinner = () => {
    const { field } = this.state;
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i in winConditions) {
      const [a, b, c] = winConditions[i];

      if (field[a] === field[b] && field[a] === field[c] && field[a] !== 0) {
        localStorage.removeItem("game-data");
        this.props.history.push(`/result/${field[a]}`);
        break;
      }

      if (field.every(a => a !== 0)) {
        localStorage.removeItem("game-data");
        this.props.history.push(`/result`);
      }
    }
  };

  resetGame = () => {
    this.setState({ turn: 1, field: [0, 0, 0, 0, 0, 0, 0, 0, 0] });
    localStorage.removeItem("game-data");
  };

  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem("game-data")));
  }

  render() {
    const { field, turn } = this.state;

    this.findWinner();

    return (
      <>
        <button onClick={this.resetGame}>Reset Game</button>
        <h2 className="turn-text noselect">{`Player turn ${
          turn === 2 ? "O" : "X"
        }`}</h2>
        <div className="game-field">
          {/* lines */}
          <div className="line vert1"></div>
          <div className="line vert2"></div>
          <div className="line gor1"></div>
          <div className="line gor2"></div>

          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(pos => {
            return (
              <div
                key={`${pos}`}
                className="field noselect"
                onClick={this.changeState(pos, turn)}
              >
                {field[pos] === 0 ? (
                  ""
                ) : (
                  <img
                    src={field[pos] === 1 ? tac : tic}
                    alt={field[pos] === 1 ? "X" : "O"}
                    height={field[pos] === 1 ? "100%" : "80%"}
                  />
                )}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
