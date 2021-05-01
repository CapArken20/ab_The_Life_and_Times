import React, { Component } from 'react';

import Navbar from "./navbar/navbar";
import TitlePage from "./intro/title_page";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
         {/* <Navbar /> */}
          <TitlePage />
      </div>
    );
  }
};
