import React from "react";
import "./css/MatchPlayer.css";
import { Spinner } from "./Spinner";

export default class MatchPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { player_name: this.props.player_name };
  }

  state = {};

  render() {
    return (
      <div className="player-div">
        <React.Suspense maxDuration={1000} fallback={<Spinner size="large" />}>
          {getPlayerDiv(this.state)}
        </React.Suspense>
      </div>
    );
  }
}

function getPlayerDiv(state) {
  if (state.player_name === "Bob") {
    return leftPlayer(state);
  }
  return rightPlayer(state);
}

function leftPlayer(state) {
  return (
    <div id="left-player">
      <p>Pic here</p>
      <p>{state.player_name}</p>
      <p>League</p>
      <p>Elo</p>
      <p>Rank</p>
    </div>
  );
}

function rightPlayer(state) {
  return (
    <div id="right-player">
      <p>Pic here</p>
      <p>{state.player_name}</p>
      <p>League</p>
      <p>Elo</p>
      <p>Rank</p>
    </div>
  );
}
