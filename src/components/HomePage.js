import React from "react";
import "./css/HomePage.css";
import { Spinner } from "./Spinner";

export default class HomePage extends React.Component {
  state = {};

  render() {
    return (
      <div className="home-page">
        <React.Suspense maxDuration={1000} fallback={<Spinner size="large" />}>
          <h1 id="home-header1">Your Best Value Proposition</h1>
          <p id="home-p1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div>
            <button className="home-button" type="button">
              {" "}
              Sign-up{" "}
            </button>
          </div>
          <div id="home-code-window"></div>
        </React.Suspense>
      </div>
    );
  }
}

// export default HomePage;
// export const Home = (props) => (
//   <div className="home-page">
//     <h1 id="home-header1">Your Best Value Proposition</h1>
//     <p id="home-p1">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//       tempor incididunt ut labore et dolore magna aliqua.
//     </p>
//     <div >
//       <button className="home-button" type="button"> Sign-up </button>
//     </div>
//     <div id="home-code-window"></div>
//   </div>
// );
