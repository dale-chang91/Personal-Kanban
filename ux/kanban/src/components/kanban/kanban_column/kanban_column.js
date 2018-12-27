import React, { Component } from 'react';
import KanbanCard from '../kanban_card/kanban_card';

import './kanban_column.css';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const TASK_QUERY = gql`
  {
    tasks(column: "todo") {
      id
      title
      description
    }
  }
`;

class KanbanColumn extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="kanban-column">
        <Query query={TASK_QUERY}>
          { ({ loading, error, data }) => {
            if (loading) return <div>Fetching column data</div>
            if (error) return <div id="error">Error fetching data</div>

            const tasksToRender = data.tasks;

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
