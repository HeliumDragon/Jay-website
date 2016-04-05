import React, { Component } from 'react';

import Image from '../image';

class Thumb extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <Image source="" altTxt="Test"/>

            <div className="caption">
              <h3>{ this.props.thumbTitle }</h3>

              <p>{ this.props.thumbDesc } {this.context.test}</p>

              <p>
                <a href={ this.props.thumbLink }
                   className="btn btn-primary"
                   role="button">
                  Button
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Thumb.propTypes = {
  thumbTitle: React.PropTypes.string.isRequired,
  thumbDesc: React.PropTypes.string.isRequired,
  thumbLink: React.PropTypes.string.isRequired
};

Thumb.contextTypes = {
  test: React.PropTypes.string.isRequired
};

export default Thumb;
