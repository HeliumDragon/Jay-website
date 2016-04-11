import React, { Component, PropTypes } from 'react';

import Image from '../image';

class Thumb extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <Image source={ this.props.thumb.img_src } altTxt="Test"/>

          <div className="caption">
            <h3>{ this.props.thumb.title }</h3>

            <p>{ this.props.thumb.description }</p>

            <p>
              <a href={ this.props.thumb.url }
                 className="btn btn-primary"
                 role="button">
                Button
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Thumb.propTypes = {
  thumb: PropTypes.object.isRequired,
};

export default Thumb;
