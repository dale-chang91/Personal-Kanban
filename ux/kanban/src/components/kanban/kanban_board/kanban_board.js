import React, { Component } from 'react';
import KanbanColumn from '../kanban_column/kanban_column';
import './kanban_board.css';

class KanbanBoard extends Component {
  render() {
    return (
      <div className="kanban-board">
        <div className="header-container">
          <h3>Kanban Board</h3>
        </div>
        <KanbanColumn name="Backlog" />
        <KanbanColumn name="To Do" />
        <KanbanColumn name="In Progress" />
        <KanbanColumn name="Finished" />
      </div>
    );
  }
}

export default KanbanBoard;
