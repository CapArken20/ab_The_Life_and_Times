import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./navbar/navbar";
import TitlePage from "./intro/title_page";
import IntroPage from "./intro/intro_main";
import IntroPage1 from "./intro/intro_family";
import IntroPage2 from "./intro/intro_situation";

export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <Router>
          <div className="content-wrapper">
            <NavBar />
              <Switch >
                <Route exact path="/" component={TitlePage} />
                <Route path="/intro" component={IntroPage} />
                <Route path="/intro-family" component={IntroPage1}/>
                <Route path="/intro-situation" component={IntroPage2}/>
              </Switch>

          </div>
        </Router>
      </div>
    );
  }
};
