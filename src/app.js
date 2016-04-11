import React, { Component, Children, PropTypes } from 'react';

import Header from './components/common/header';
import Footer from './components/common/footer';

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
      projectList: this.state
    };
  }

  renderChildren() {
    return Children.map(this.props.children, child => {
      return React.cloneElement(child);
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
  projectList: PropTypes.object.isRequired
};

export default App;
