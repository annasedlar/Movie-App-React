//Dependencies (someone else made these) -- React Stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

//Custom Modules
import App from './App';
import SingleMovie from './SingleMovie';
import Home from './Home';
import SearchResults from './searchResults';

//Custom CSS
import './index.css';

ReactDOM.render((
  <Router history={hashHistory} >
  	<Route path="/" component={App}>
  		<IndexRoute component={Home} />
  		<Route path="movie/:id" component={SingleMovie} />
  		<Route path="search/:movieToSearchFor" component={SearchResults} />
  	</Route>
  </Router>),

  document.getElementById('root')
);
