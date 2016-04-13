import React, { Component, PropTypes } from 'react';

class Project extends Component {
  constructor() {
    super();
  }

  renderProject(projects, id) {
    return projects.filter(project => {
      return project.id === id;
    })
    .map(item => {
      return (
        <div key={item.id}
             className="panel">
          { item.title }
        </div>
      );
    });
  }

  render() {
    let id = parseInt(this.props.params.id, 10)
      , projects = this.context.projectList.projects;

    return(
      <div>
        { this.renderProject(projects, id) }
      </div>
    );
  }
}

Project.contextTypes = {
  projectList: PropTypes.object.isRequired
};

export default Project;
