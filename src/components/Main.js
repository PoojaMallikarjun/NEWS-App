import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import News from "./News";
import Home from "./Home";
import Header from './Header';
import Footer from './Footer';

class Main extends Component {
  render() {
    return (
      // <React.Fragment>
      //   <BrowserRouter>
      <div>
         <Header />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/:type" component={News} /> 
              <Redirect path="/"/>
            </Switch> 
          <Footer />
          {/* </BrowserRouter>
       </React.Fragment> */}
      </div>
   
    );
  }
}

export default Main;
