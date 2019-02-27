import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import './App.css';


class App extends Component {
	constructor() {
		super();
		this.state = {
			friends: []
		};
	}

	componentDidMount() {
		console.log("CDM is running.");
	}

	render() {
		return (
			<div className="App">
				<nav className="nav-bar">
					<h1 className="nav-header">Tico S. Thepsourinthone</h1>
					<ul className="nav-links">
						<a href="#">Home</a>
						<a href="#">My Friends</a>
						<a href="#">Add Friend</a>
					</ul>
				</nav>
				<div>
					<h2>Welcome to My Page!</h2>
				</div>


				<Route 
					exact
					path="/friends-list"
					component={FriendsList}
				/>
			</div>
		);
	}
}

export default App;
