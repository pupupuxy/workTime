import React, { Component } from 'react';
import './App.css';
import NowDate from './NowDate'
import Countdown from './Countdown'
import LunchTime from './LunchTime'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
           下班倒计时
       <NowDate></NowDate>
            <LunchTime/>
          <Countdown/>

        </header>
      </div>
    );
  }
}

export default App;
