import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TemperatureContainer from './TemperatureContainer';
import CurrentTimeContainer from './CurrentTimeContainer';
import PostsContainer from './PostsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TemperatureContainer />
        <CurrentTimeContainer />
        <PostsContainer />
      </div>
    );
  }
}

export default App;
