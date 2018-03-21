import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TemperatureContainer from './TemperatureContainer';
import CurrentTimeContainer from './CurrentTimeContainer';
import PostsContainer from './PostsContainer'
import PhotosContainer from './PhotosContainer'
import {
  QueryRenderer,
  graphql
} from 'react-relay';

import environment from './createRelayEnvironment';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TemperatureContainer />
        <CurrentTimeContainer />
        <QueryRenderer
          environment={environment}

          query={graphql`
            query AppQuery {
              getPhotos {
                title
                thumbnailUrl
              }
              getPosts {
                title
                body
                userId
              }
            }
          `}

          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              console.log(props);
              return (  
              <div style={{display: "flex"}}>
                <PostsContainer posts={props.getPosts.slice(0, 10)} />
                <PhotosContainer photos={props.getPhotos.slice(0, 10)}/>
              </div>)
    
            }
            return <div>Loading</div>;
          }}
        />
      </div>
    );
  }
}

export default App;
