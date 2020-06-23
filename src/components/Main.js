import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import News from "./News";
import Home from "./Home";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/:type" component={News} /> 
            <Redirect path="/"/>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default Main;
