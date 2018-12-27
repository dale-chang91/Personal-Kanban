import React, { Component } from 'react';

import KanbanCard from '../kanban_card/kanban_card';

class KanbanColumn extends Component {
  constructor(props) {
    super(props);

    
  }

  render() {
    return (
      <div className="kanban-column">
        <ul>
          {
            this.state.tasks.map(task => {
              return (
                <KanbanCard
                  key={task.name}
                ></KanbanCard>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
