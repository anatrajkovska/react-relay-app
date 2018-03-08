import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { graphql } from 'relay-runtime';
graphql`
query srcQuery {
    getCurrentTemperature(city: "Skopje") {
      value
    }
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
