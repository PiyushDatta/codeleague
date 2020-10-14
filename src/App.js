import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";

// diff tabs
import NoMatch from './components/NoPageFound';
import HomePage from './components/HomePage';
import PlayPage from './components/PlayPage';
import MatchPage from './components/MatchPage';
// import { About } from './About';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/play" component={PlayPage} />
            <Route exact path="/match" component={MatchPage} />
            <Route exact path="/problem" component={MatchPage} />

            {/* <Route path="/about" component={About} /> */}
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
