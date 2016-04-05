import React, { Component } from 'react';

import Header from './components/common/header';

import Footer from './components/common/footer';

import AppActions from './action/app-actions';
import AppStore from './stores/app-store';

function getProjects() {
  return { projects: AppStore.getProjects() };
}

class App extends Component {
  constructor() {
    super();
    this.state = getProjects();
  }

  getChildContext() {
    return {
      test: 'test'
    };
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, this.state);
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
