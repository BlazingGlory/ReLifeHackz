import React, { Component } from 'react';
import {Card, CardText} from 'material-ui/Card';
//import FlatButton from 'material-ui/FlatButton';

class TaskComponent extends Component {
  render() {
    return (
      <div className="taskCompontent">
        <Card>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
        <Card>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa.
          </CardText>
        </Card>
        <Card>
          <CardText>
            Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
        <p>This is the task.</p>
      </div>
    );
  }
}

export default TaskComponent;
