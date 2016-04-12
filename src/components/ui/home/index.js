import React, { Component, PropTypes } from 'react';

import PageTitle from '../../../components/common/pageTitle';
import Thumb from '../../../components/common/thumbnail';
import Projects from '../projects';

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <PageTitle title='Jay Davis'/>

          <Projects />
        </div>
      </div>
    );
  }
}

export default Home;
