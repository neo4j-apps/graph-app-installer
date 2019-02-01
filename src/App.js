import React, { Component } from 'react';
import { Header, Card } from 'semantic-ui-react';
import GraphAppCard from './GraphAppCard.js';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import graphapps from './graphapps.json';

class App extends Component {
  render() {
    return (
      <div>
        <Header as='h1'>Graph App Installer</Header>
          <Card.Group>
            {graphapps.map((app, i) => {
              return <GraphAppCard key={i} app={app} />;
            })}
          </Card.Group>
      </div>
    );
  }
}

export default App;
