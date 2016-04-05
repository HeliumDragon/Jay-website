import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              Jay Davis
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
