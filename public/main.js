var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var rootComp = require('./components/RootComponent.js');
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

var { Router, Route, IndexRoute, IndexLink, Link } = ReactRouter;

ReactDOM.render(
  <Router>
    <Route path="/" component={rootComp.RootComp}>
    </Route>
  </Router>,
  document.getElementById('root')
);
