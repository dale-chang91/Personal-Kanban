import React, { Component } from 'react';
import './App.css';

import KanbanForm from '../src/components/kanban/kanban_card/kanban_form';

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
        <KanbanForm></KanbanForm>
      </div>
    );
  }
}

export default App;
