import React from "react";
import "./css/MatchPage.css";
import { Spinner } from "./Spinner";
import MatchPlayer from "./MatchPlayer";
import MatchProblems from "./MatchProblems";

export default class MatchPage extends React.Component {
  state = {};

  render() {
    return (
      <div className="match-page">
        <React.Suspense maxDuration={1000} fallback={<Spinner size="large" />}>
          <div className="match-page-top">
            <h1>1v1 - 5:00</h1>
            <br></br>
            <MatchPlayer player_name={getPlayerOne()}></MatchPlayer>
            <MatchPlayer player_name={getPlayerTwo()}></MatchPlayer>
            <h1>vs</h1>
          </div>
          <div className="match-page-bottom">
            <MatchProblems></MatchProblems>
          </div>
        </React.Suspense>
      </div>
    );
  }
}

function getPlayerOne() {
  var playerOne = "Bob";
  return playerOne;
}

function getPlayerTwo() {
  var playerTwo = "Alice";
  return playerTwo;
}
