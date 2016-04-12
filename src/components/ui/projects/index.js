import React, { Component, PropTypes } from 'react';

import Thumb from '../../../components/common/thumbnail';
import ProjectManager from './projectManager';

class Projects extends Component {
  constructor() {
    super();
  }

  renderItems(items) {
    return items.map(item => {
      return <Thumb key={ item.id }
                    thumb={ item }
                    />
    });
  }

  render() {
    let items = this.context.projectList.projects;

    return (
      <section>
        <ProjectManager projects={ items } />

        { this.renderItems(items) }
      </section>
    );
  }
}

Projects.contextTypes = {
  projectList: PropTypes.object.isRequired
};

export default Projects;
