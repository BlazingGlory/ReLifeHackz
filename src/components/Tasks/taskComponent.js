import React, { Component } from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import injectTapEventPlugin from 'react-tap-event-plugin';

import HabbitsList from './HabbitsList/HabbitsList';
import './taskComponent.css';
//import FlatButton from 'material-ui/FlatButton';

const habbits = [
  {id: 1, habbitTitle: "URL Avatar", habbitSubTitle: "Subtitle", habbitDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elite, donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi."},
  {id: 2, habbitTitle: "URL Avatar", habbitSubTitle: "Subtitle", habbitDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa." },
  {id: 3, habbitTitle: "URL Avatar", habbitSubTitle: "Subtitle", habbitDescription: "Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."},
  {id: 4}
];

injectTapEventPlugin();

class TaskComponent extends Component {

  constructor(props) {
    super(props);
    this.addHabbit = this.addHabbit.bind(this);
  }

  addHabbit() {
    habbits.push({id: 5});
    console.log(habbits)
  }

  render() {

    return (
      <div className="taskCompontent flexcontainer">
        <div className="row">
          <FloatingActionButton className="addTask-btn-style" secondary={true} onClick={this.addHabbit}>
            <ContentAdd />
          </FloatingActionButton>
          <HabbitsList habbits={habbits}/>
        </div>
      </div>
    );
  }
}

export default TaskComponent;
