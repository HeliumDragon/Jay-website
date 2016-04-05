import React, { Component } from 'react';

import PageTitle from '../../../components/common/pageTitle';
import Thumb from '../../../components/common/thumbnail';

class Home extends Component {
  render() {
    return (
      <div>
        <PageTitle title='Jay Davis'/>

        <Thumb thumbTitle="title"
               thumbDesc="desc"
               thumbLink="#"
               />
      </div>
    );
  }
}

export default Home;
