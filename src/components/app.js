import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave} from "@fortawesome/free-solid-svg-icons";

import NavBar from "./navbar/navbar";
import TitlePage from "./intro/title_page";
import IntroPage from "./intro/intro_main";
import IntroPage1 from "./intro/intro_family";
import IntroPage2 from "./intro/intro_situation";
import FirstMorning from "./story/first_morning";
import Prep from "./story/prep";
import ThankYou from "./story/thank_you";
import WakeUp from "./active_path/wake_up";
import Workout from "./active_path/workout";
import Eat from "./active_path/eat";
import SleepIn from "./lazy_path/sleep_in";




library.add(faSave)

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
                <Route path="/first-morning" component={FirstMorning}/>
                <Route path="/wake-up" component={WakeUp}/>
                <Route path="/sleep-in" component={SleepIn}/>
                <Route path="/workout" component={Workout}/>
                <Route path="/eat" component={Eat}/>
                <Route path="/prep" component={Prep}/>
                <Route path="/work" component={ThankYou}/>
                
              </Switch>

          </div>
        </Router>
      </div>
    );
  }
};
