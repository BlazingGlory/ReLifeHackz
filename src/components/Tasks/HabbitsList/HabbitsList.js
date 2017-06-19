import React, { Component } from 'react';
import {Card, CardText, CardHeader} from 'material-ui/Card';

import '../taskComponent.css';

class HabbitsList extends Component {

    render() {
      const Habbits = this.props.habbits;
      const habbitListItems = Habbits.map((habbit) => {
        return (
          <li key={habbit.id}>
            <Card className="taskItem">
               <CardHeader className="taskTitle" title={habbit.habbitTitle} subtitle={habbit.habbitSubTitle}>
               </CardHeader>
               <CardText className="cardText">
                  {habbit.habbitDescription}
               </CardText>
            </Card>
          </li>
        )
      })

    return (
      <div>
        <ul>{habbitListItems}</ul>
      </div>
    )
  }
}

export default HabbitsList;
