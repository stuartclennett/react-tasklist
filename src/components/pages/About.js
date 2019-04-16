import React, { Component } from 'react';

class About extends Component {
  //React.Fragment == ghost element in DOM
  render() {
    return(
    <React.Fragment>
      <h1>About</h1>
      <p>This is the Todo List app v1.0.</p>
      <p>It's part of the react crash course by Traversy Media</p>
    </React.Fragment>    
    );
  }
}

export default About;