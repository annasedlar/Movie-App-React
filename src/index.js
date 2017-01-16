

//Dependencies (someone else made these) -- React Stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

//Custom Modules
import App from './App';

//Custom CSS
import './index.css';

ReactDOM.render((
  <Router history={hashHistory} >
  	<Route path="/" component={App} />
  </Router>),

  document.getElementById('root')
);
