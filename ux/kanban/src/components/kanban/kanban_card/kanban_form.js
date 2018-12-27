import React, { Component } from 'react';

class KanbanForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskName: '',
      newTaskDesc: ''
    };

    // lexical this vs instance/reference
    // this.formSubmitted = this.formSubmitted.bind(this);
  }

  newTaskNameChanged(event) {
    //console.log('Task name '+event.target.value);
    this.setState({
      newTaskName: event.target.value
    })
  }

  newTaskDescChanged(event) {
    //console.log('Task desc '+event);
    this.setState({
      newTaskDesc: event.target.value
    })
  }

  formSubmitted(event) {
    event.preventDefault();
    console.log(this.state.newTaskName);
  }

  render() {
    return(
      <form onSubmit={(event) => this.formSubmitted(event)}>
      // <form onSubmit={this.formSubmitted.bind(this)}>
        <label htmlFor="newTaskName">Task Name</label>
        <input
          onChange={(event) => this.newTaskNameChanged(event)}
          id="newTaskName"
          name="newTaskName"
        />
        <label htmlFor="newTaskDesc">Task Description</label>
        <input
          onChange={(event) => this.newTaskDescChanged(event)}
          id="newTaskDesc"
          name="newTaskDesc"
        />
        <button type="submit">Add Task</button>
      </form>
    );
  }
}
