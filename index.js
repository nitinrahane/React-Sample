import React, { Component } from 'react';
import UserTiles from './UserTiles';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <UserTiles />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
