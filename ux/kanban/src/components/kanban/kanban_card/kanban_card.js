import React, { Component } from 'react';

const KanbanCard = (props) => {
  const {

  } = props;

  return (
    <div className="kanban-card">
      <span></span>
    </div>
  );
};

class KanbanCard extends Component {
  constructor(props) {

  }

  render() {
    return (
      <div className="card">
        <p>{this.state.title}</p>
        <p>{this.state.desc}</p>
      </div>
    );
  }
}

export default KanbanCard;
