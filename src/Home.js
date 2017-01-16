//dependencies/components from react
import React, { Component } from 'react';

//custom components/modules
import $ from 'jquery';
import Poster from'./poster.js';
import Constants from './Constants.js';
import Config from './config.js';
import DiscoverButton from './DiscoverButton.js';

import './App.css'; 

class Home extends Component{
	constructor(props) {
		super(props);
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.state = {
			moviePosters: []
		}
	}

	componentDidMount() {
        var url = Constants.baseUrl + Constants.nowPlayingEP + Config.api_key; 
        $.getJSON(url, (movieData) =>{
            console.log(movieData);
            this.setState({
                moviePosters: movieData.results
            });
        });
    }

    // custom function to update homes state var , from the CHILD buttons
    handleCategoryChange(CategoryApiUrl){
    	console.log(CategoryApiUrl)
    	var url = Constants.baseUrl + CategoryApiUrl + Config.api_key;
    	console.log(url);
    	$.getJSON(url,(categoryData) =>{
    		this.setState({
    			moviePosters: categoryData.results
    		})
    	});
    }

	render(){
		var postersArray = [];
        this.state.moviePosters.map((poster, index) => {
            postersArray.push(<Poster poster={poster} key={index} />)
        });
        //build buttons with discoverbutton component
        var DiscoverButtons =[];
        Constants.discoverLinks.map((category, index) =>{
        	DiscoverButtons.push(
        		<DiscoverButton buttonLink={category.link} buttonText={category.buttonText} functionFromParent={this.handleCategoryChange} key={index} />
        		)
        })

		return(
			<div>
				<h1>This is the Home Page</h1>
				<div className="discoverbuttons">
				{DiscoverButtons}
				</div>
                {postersArray}
            </div>
		)
	}
}

export default Home; 
















