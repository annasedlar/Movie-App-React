import React, { Component } from 'react';
import $ from 'jquery';
// import Poster from './poster.js';

class SingleMovie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentMovieData: [],
			budget: "",
			revenue: ""
		}
	}

	componentDidMount() {
		var currentMovieId = this.props.params.id;
		var url = 'https://api.themoviedb.org/3/movie/'+currentMovieId+'?api_key=fec8b5ab27b292a68294261bb21b04a5';
		console.log(url);
		$.getJSON(url,(movieAPIResponse) =>{
			console.log(movieAPIResponse);
			var revenue = "$" + movieAPIResponse.revenue; 
			var budget = "$" + movieAPIResponse.budget;
			this.setState({
				currentMovieData: movieAPIResponse, 
				revnue: revenue,
				budget: budget
			})
		});
	}

	render(){
		var posterPath='http://image.tmdb.org/t/p/original' + this.state.currentMovieData.poster_path;
		return(
			<div className="col-sm-8">
				<h1> Revenue: {this.state.revenue}</h1>
				<h1> Budget: {this.state.budget}</h1>
				<a href={this.state.currentMovieData.homepage} target="blank">
				<img src={posterPath} />
				</a>
			</div>
			// /movie/:id
		)
	}
};

export default SingleMovie;