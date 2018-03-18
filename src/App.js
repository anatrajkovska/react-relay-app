import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TemperatureContainer from './TemperatureContainer';
import CurrentTimeContainer from './CurrentTimeContainer';
import PostsContainer from './PostsContainer'
import PhotosContainer from './PhotosContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TemperatureContainer />
        <CurrentTimeContainer />
        <div style={{display: "flex"}}>
          <PostsContainer />
          <PhotosContainer />
        </div>
      </div>
    );
  }
}

export default App;
