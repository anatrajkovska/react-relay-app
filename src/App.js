import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TemperatureContainer from './TemperatureContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TemperatureContainer/>
      </div>
    );
  }
}

export default App;
