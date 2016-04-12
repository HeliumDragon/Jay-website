import React, { Component, PropTypes } from 'react';

import AppStore from '../../../stores/app-store';
import AppActions from '../../../action/app-actions';

class ProjectManager extends Component {
  constructor() {
    super();
  }

  handleChange(e) {
    let input = this.searchInput.value
      , projects = this.props.projects
      , search;

    search = this.filterProjects(projects, input);

    AppActions.orderProject(search);

    e.preventDefault();
  }

  filterProjects(projects, input) {
    let filtered = []
      , splitInput = input.toLowerCase().split('');

    projects.filter(project => {
      let splitTitle = project.title.toLowerCase().split('');

      return splitInput.every((letter, index) => {
        return letter === splitTitle[index];
      });
    }).map(project => {
      filtered.push(project);
    });

    return filtered;
  }

  render() {
    return (
      <form className="form-horizontal"
            onSubmit={ this.handleChange.bind(this) }>
        <div className="form-group">
          <label htmlFor="search"
                 className="col-sm-2 control-label">
            Search
          </label>

          <div className="col-sm-8">
            <input type="text"
                   className="form-control"
                   id="search"
                   ref={ ref => this.searchInput = ref }
                   placeholder="eg: React"
                   onChange={ this.handleChange.bind(this) }
                   />
          </div>
        </div>
      </form>
    );
  }
}

ProjectManager.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectManager;
