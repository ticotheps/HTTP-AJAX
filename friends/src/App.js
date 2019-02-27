import React, { Component } from 'react';
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
				<div className="welcome-div">
					<h2 className="welcome-header">Welcome to My Page!</h2>
				</div>
				<FriendsList />
			</div>
		);
	}
}

export default App;
