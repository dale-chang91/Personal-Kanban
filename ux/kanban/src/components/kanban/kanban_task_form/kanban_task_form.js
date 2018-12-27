import React from 'react';

const KanbanForm = (props) => {
  return (
    <form onSubmit={props.formSubmitted}>
      <label htmlFor="newTaskName">Task Name </label>
      <input
        onChange={props.newTaskNameChanged}
        id="newTaskName"
        name="newTaskName"
        value={props.newTaskName}
      />
      <br />
      <label htmlFor="newTaskDesc">Task Description </label>
      <input
        onChange={props.newTaskDescChanged}
        id="newTaskDesc"
        name="newTaskDesc"
        value={props.newTaskDesc}
      />
      <br/>
      <button type="submit">Create Task</button>
    </form>
  )
};

export default KanbanForm;
