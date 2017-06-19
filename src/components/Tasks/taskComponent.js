import React, { Component } from 'react';
import {Card, CardText, CardHeader} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './taskComponent.css';
//import FlatButton from 'material-ui/FlatButton';

class TaskComponent extends Component {
  render() {
    return (
      <div className="taskCompontent flexcontainer">
        <div className="row">
          <FloatingActionButton className="addTask-btn-style" secondary={true}>
            <ContentAdd />
          </FloatingActionButton>
          <Card className="taskItem">
            <CardHeader className="taskTitle" title="URL Avatar" subtitle="Subtitle">
            </CardHeader>
            <CardText className="cardText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            </CardText>
          </Card>
          <Card className="taskItem">
            <CardHeader className="taskTitle" title="URL Avatar" subtitle="Subtitle"/>
            <CardText className="cardText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa.
            </CardText>
          </Card>
          <Card className="taskItem">
            <CardHeader className="taskTitle" title="URL Avatar" subtitle="Subtitle"/>
            <CardText className="cardText">
              Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

export default TaskComponent;
