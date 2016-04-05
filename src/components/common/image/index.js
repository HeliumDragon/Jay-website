import React, { Component } from 'react';

class Image extends Component {
  render() {
    return (
      <img src={this.props.source}
           alt={this.props.altTxt}
           className="img-responsive"
           />
    );
  }
}

Image.propTypes = {
  source: React.PropTypes.string.isRequired,
  altTxt: React.PropTypes.string.isRequired
};

export default Image;
