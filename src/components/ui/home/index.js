import React, { Component } from 'react';

import PageTitle from '../../../components/common/pageTitle';
import Thumb from '../../../components/common/thumbnail';

class Home extends Component {
  renderItems(items) {
    return items.map(item => {
      return <Thumb key={ item.id }
                    thumb={ item }
                    />
    });
  }

  render() {
    let items = this.props.projects;

    return (
      <div className="row">
        <div className="col-md-12">
          <PageTitle title='Jay Davis'/>

          { this.renderItems(items) }
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  projects: React.PropTypes.array
};

export default Home;
