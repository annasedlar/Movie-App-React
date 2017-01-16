//Dependencies, someone else made this stuff --React stuff
import React, { Component } from 'react';
// import logo from './logo.svg';

//Custom modules/components
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Poster from './poster.js';
//Custom CSS
import './App.css';

class App extends Component {
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
            })
        })
    }

    //load up the moviePosters array with poster components
	render() {
        var postersArray = [];
        this.state.moviePosters.map((poster, index) => {
            postersArray.push(<Poster poster={poster} key={index} />)
        });
		return (
		<div className="container">
            <div className="row">Movie Posters</div>
			<div className="row" >
                <h1>{postersArray}</h1>
			</div>
		</div>
		);
	}
}

export default App;





