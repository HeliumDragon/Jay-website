import React, { Component } from 'react';

import NavBar from '../navBar'

class Header extends Component {
  render() {
    return (
      <header className="row">
        <NavBar />
      </header>
    );
  }
}

export default Header;
