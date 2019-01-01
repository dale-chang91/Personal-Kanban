import React from 'react';

const cardStyle = {
  border: '1px solid black',
  margin: 5,
};

const KanbanCard = (props) => {
  return (
    <div className="kanban-card" style={cardStyle}>
      <div className="kanban-card-header-container">
        <h4><span className="kanban-card-header-text">{props.title}</span></h4>
      </div>
      <div className="kanban-card-description-container">
        <span className="kanban-card-description-text">{props.description}</span>
      </div>
    </div>
  );
};

export default KanbanCard;
