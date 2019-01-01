import React, { Component } from 'react';
import KanbanCard from '../kanban_card/kanban_card';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const TASK_QUERY = gql`
query columnTasks($columnName: String!)
  {
    allTasks(filter: { column: $columnName }) {
      id
      title
      description
    }
  }
`;

const columnStyle = {
  display: 'flex',
  flexDirection: 'column',
};

class KanbanColumn extends Component {
  render() {
    return (
      <div className="kanban-column">
        <div className="column-header">
          <h3>{this.props.columnName}</h3>
        </div>
        <Query
          query={TASK_QUERY}
          variables={{ columnName: this.props.columnName }}
        >
          { ({ loading, error, data }) => {
            if (loading) return <div>Fetching task data</div>
            if (error) {
              console.log('error: '+error);
              console.log('data: '+JSON.stringify(data));
              return <div id="error">Error fetching task data</div>
            }

            console.log('data: '+JSON.stringify(data));
            const tasksToRender = data.allTasks;

            return (
              tasksToRender.map(task =>
                <KanbanCard
                  key={task.id}
                  title={task.title}
                  description={task.description}
                />
              )
            )
          }}
        </Query>
      </div>
    );
  }
}

export default KanbanColumn;
