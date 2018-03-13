import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TemperatureContainer from './TemperatureContainer';
import CurrentTimeContainer from './CurrentTimeContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TemperatureContainer />
        <CurrentTimeContainer />
      </div>
    );
  }
}

export default App;
