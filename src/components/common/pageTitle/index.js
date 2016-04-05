import React, { Component } from 'react';

class PageTitle extends Component {
  render() {
    return (
      <div className="page-header">
        <h1>{ this.props.title }</h1>
      </div>
    );
  }
}

PageTitle.propTypes = { title: React.PropTypes.string.isRequired };

export default PageTitle;
