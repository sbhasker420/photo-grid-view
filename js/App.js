import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Display from "./Gallery/Display";
import Gallery from "./Gallery/Gallery";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/:id">
              <Display />
            </Route>
            <Route path="/">
              <Gallery />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
