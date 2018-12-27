import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Kanban Application'
    };
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
