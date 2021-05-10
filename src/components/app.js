import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./navbar/navbar";
import TitlePage from "./intro/title_page";
import IntroPage from "./intro/introduction_page";
import IntroPage1 from "./intro/intro_page_family";

export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <Router>
          <div>
            <NavBar />
              <Switch>
                <Route exact path="/" component={TitlePage} />
                <Route path="/intro" component={IntroPage} />
                <Route path="/intro-family" component={IntroPage1}/>
              </Switch>

          </div>
        </Router>
      </div>
    );
  }
};
