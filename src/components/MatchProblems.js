import React from "react";
import "./css/MatchProblems.css";
import { Spinner } from "./Spinner";

export default class MatchProblems extends React.Component {
  state = { num_problems: 6 };

  render() {
    return (
      <div className="match-problems">
        <React.Suspense maxDuration={1000} fallback={<Spinner size="large" />}>
          <h1>Problems</h1>
          <div className="match-problems-box">
            {Array(this.state.num_problems).fill(getProblem())}
          </div>
        </React.Suspense>
      </div>
    );
  }
}

function getProblem() {
  return (
    <div id="match-single-problem">
      <p>Problem here!</p>
    </div>
  );
}
