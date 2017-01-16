//dependencies/components from react
import React, { Component } from 'react';

//custom components/modules
import $ from 'jquery';
import Poster from'./poster.js';
import './App.css'; 

class Home extends Component{
	constructor(props) {
		super(props);
		this.state = {
			moviePosters: []
		}
	}

	componentDidMount() {
        var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5';
        $.getJSON(url, (movieData) =>{
            console.log(movieData);
            this.setState({
                moviePosters: movieData.results
            });
        });
    }

	render(){
		var postersArray = [];
        this.state.moviePosters.map((poster, index) => {
            postersArray.push(<Poster poster={poster} key={index} />)
        });
		return(
			<div>
				<h1>This is the Home Page</h1>
                {postersArray}
            </div>
		)
	}
}

export default Home; 