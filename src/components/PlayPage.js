import React from "react";
import "./css/PlayPage.css";
import { Spinner } from "./Spinner";
import styled from "styled-components";
const PlayButton = styled.button`
  background: black;
  border-radius: 3px;
  border: 2px solid black;
  color: white;
  padding: 10px 75px 10px 75px;
  font-size: 75px;
`;
export default class PlayPage extends React.Component {
  state = {};

  render() {
    return (
      <div className="play-page">
        <React.Suspense maxDuration={1000} fallback={<Spinner size="large" />}>
          <div className="play-button-div" style={{ marginTop: 50 }}>
            <a href="/match" style={{ textDecoration: "none", color: "white" }}>
              <PlayButton>Play</PlayButton>
            </a>
          </div>
          <div className="league-text-div" style={{ marginTop: 50 }}>
            <h1 style={{ marginRight: 16 }}>League - {getLeague()}</h1>
            <h1>Elo - {getElo()}</h1>
            <h1 style={{ marginLeft: 208 }}>
              Rank - {getRank()} out of {getLastRank()}
            </h1>
          </div>
        </React.Suspense>
      </div>
    );
  }
}

function getLeague() {
  var leagueName = "Bronze";
  return leagueName;
}

function getElo() {
  var eloRank = 350;
  return eloRank;
}

function getRank() {
  var playerRank = 2700;
  return playerRank;
}

function getLastRank() {
  var lastPlayerRank = 3000;
  return lastPlayerRank;
}
