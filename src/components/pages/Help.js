import React, { Component } from 'react';

class Help extends Component {
  //React.Fragment == ghost element in DOM
  render() {
    return(
    <React.Fragment>
      <h1>Help</h1>
      <ul className="list-unstyled list-padded">
          <li className="list-item-padded">Type your new task into the "Add to do" field and press enter (or tap Submit)</li>
          <li className="list-item-padded">To mark a task as complete, tick the checkbox and your task will appear as completed</li>
          <li className="list-item-padded">To remote a task entirely, tap on the red trash-can icon.  This cannot be undone.</li>
      </ul>
      <img src="./assets/img/screen-mobile.png" className="img-fluid center-image" alt="Screen shot of mobile app"/>
    </React.Fragment>    
    );
  }
}

export default Help;