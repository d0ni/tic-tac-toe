import React from "react";
import "./App.css";
import { Router, Switch, Route } from "react-router-dom";

import history from "./history";
import Game from "./pages/game";
import HomePage from "./pages/HomePage";
import Result from "./pages/Result";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/game" component={Game} />
        <Route path="/result/:winner?" component={Result} />
      </Switch>
    </Router>
  );
}

export default App;
