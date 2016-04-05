import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Home from './components/ui/home';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render((
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
    </Route>
  </Router>
), document.getElementById('app'));

require('./styles/main.scss')
