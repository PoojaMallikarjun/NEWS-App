import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Headlines from "./TopHeadLines";
import HomePage from "./HomePage";
import Business from "./Business";
import Health from "./Health";
import Science from "./Science";
import Weather from "./Weather";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <HomePage />
          <Switch>
            <Route path="/home" />
            <Route exact path="/topheadlines" component={Headlines} />
            <Route exact path="/business" component={Business} />
            <Route exact path="/health" component={Health} />
            <Route exact path="/science" component={Science} />
            <Route exact path="/weather" component={Weather} />
            <Redirect to="/home" />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default Main;
