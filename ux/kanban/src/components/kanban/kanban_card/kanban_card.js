import React from 'react';

import './kanban_card.css';

const KanbanCard = (props) => {
/*
  const {
    id, title, description
  } = props;
*/
  return (
    <div className="kanban-card">
      <div className="kanban-card-header-container">
        <span className="kanban-card-header-text">{props.title}</span>
      </div>
      <div className="kanban-card-description-container">
        <span className="kanban-card-description-text">{props.description}</span>
      </div>
    </div>
  );
};

export default KanbanCard;
