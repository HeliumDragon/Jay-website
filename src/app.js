import React, { Component } from 'react';

import Header from './components/common/header';

import Footer from './components/common/footer';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getChildContext() {
    return {
      test: 'test'
    };
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {});
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        { this.renderChildren() }
        <Footer />
      </div>
    );
  }
}

App.childContextTypes = {
  test: React.PropTypes.string.isRequired
};

export default App;
