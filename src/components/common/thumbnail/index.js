import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

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
              <Link to={ this.props.thumb.url + this.props.thumb.id }
                    className="btn btn-primary"
                    role="button">Button</Link>
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
