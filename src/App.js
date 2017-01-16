//Dependencies, someone else made this stuff --React stuff
import React, { Component } from 'react';
//Custom modules/components
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//Custom CSS
import './App.css';
import BootstrapNavBar from './BootstrapNavBar.js';

class App extends Component {

    //load up the moviePosters array with poster components
	render() {
		return (
		<div className="container">
            <div className="row">
                <BootstrapNavBar />
                {this.props.children}
            </div>
		</div>
		);
	}
}

export default App;





