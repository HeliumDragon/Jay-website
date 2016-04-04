import React from 'react';

class PageTitle extends React.Component {
  render() {
    return (
      <div className="page-header">
        <h1>{ this.props.title }</h1>
      </div>
    );
  }
}

PageTitle.propTypes = { title: React.PropTypes.string };

export default PageTitle;
