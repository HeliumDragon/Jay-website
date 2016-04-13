import React, { Component } from 'react';

class Project extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.context);
    return(
      <div>
        Project
      </div>
    );
  }
}

export default Project;
