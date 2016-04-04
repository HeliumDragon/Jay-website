import React from 'react';

import Header from './components/common/header';

import Footer from './components/common/footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log('running app');
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {});
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Header />
          { this.renderChildren() }
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
