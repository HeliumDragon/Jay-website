import React, { Component } from 'react';

class ProjectManager extends Component {
  render() {
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="search"
                 className="col-sm-2 control-label">
            Search
          </label>

          <div className="col-sm-8">
            <input type="text"
                   className="form-control"
                   id="search"
                   placeholder="eg: React" />
          </div>
        </div>
      </form>
    );
  }
}

export default ProjectManager;
