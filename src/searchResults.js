import React, { Component } from 'react';
import { Link } from 'react-router'; 
import Constants from './Constants.js';

class SearchResults extends Component{
	render(){
		// this.props.poster contains an entire movie object from parent
		var imagePath= Constants.imageBase;
		var posterLink='movie/';
		return(
			<div className="col-sm-8 col-md-3 movie-poster">
				<h1>{this.props.params.movieToSearchFor}</h1>
				<Link to={posterLink}>
				<img src={imagePath} />
				</Link>
			</div>
		)
	}
}

export default SearchResults;