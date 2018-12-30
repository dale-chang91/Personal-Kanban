import React, { Component } from 'react';
import KanbanColumn from '../kanban_column/kanban_column';
import './kanban_board.css';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const COLUMN_QUERY = gql`
{
  allColumns {
    name
  }
}
`;

class KanbanBoard extends Component {
  render() {
    return (
      <div className="kanban-board">
        <div className="header-container">
          <h3>Kanban Board</h3>
        </div>
        <Query query={COLUMN_QUERY}>
          { ({ loading, error, data }) => {
            if (loading) return <div id="loading">Fetching columns</div>
            if (error) {
              console.log('error: '+error);
              return <div id="error">Error fetching columns</div>
            }
            console.log('data: '+JSON.stringify(data));
            const columnsToRender = data.allColumns;

            return (
              <div>
                {
                  columnsToRender.map(column =>
                    <KanbanColumn
                      key={column.name}
                      columnName={column.name}
                    />
                  )
                }
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default KanbanBoard;
