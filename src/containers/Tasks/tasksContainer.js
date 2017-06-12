import React, { Component } from 'react';

import TaskComponent from '../../components/Tasks/taskComponent'

class TaskContainer extends Component {
  render() {
    return (
      <div className="taskContainer">
        This is the task container body.
        <TaskComponent />
      </div>
    );
  }
}

export default TaskContainer;
