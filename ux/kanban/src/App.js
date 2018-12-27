import React, { Component } from 'react';
import './App.css';

import KanbanForm from '../src/components/kanban/kanban_task_form/kanban_task_form';
import KanbanBoard from '../src/components/kanban/kanban_board/kanban_board';

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
        //{<KanbanForm></KanbanForm>}
        <KanbanBoard />
      </div>
    );
  }
}

export default App;
