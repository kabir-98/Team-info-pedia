import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Details from "./components/Details/Details";
import Home from "./components/Home/Home";
// import Main from "./components/Main/Main";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Main">
          <Home />
        </Route>
        <Route path="/Details/:id">
          <Details />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
