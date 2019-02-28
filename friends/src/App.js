import React, { Component } from 'react';
import axios from 'axios';
import Home from './components/Home';
import FriendsList from './components/FriendsList';
import NewFriendForm from './components/NewFriendForm';
import { 
	BrowserRouter as Router,
	Route,
	NavLink
} from "react-router-dom";

import './App.css';


class App extends Component {
	constructor() {
		super();
		this.state = {
			friends: [],
			error: "",
		};
	}

	componentDidMount() {
		console.log("CDM is running.");

		axios
			.get('http://localhost:5000/friends')
			.then(res => {
				console.log(res.data);
				this.setState({ friends: res.data });
			})
			.catch(err => {
				console.log(err);
				this.setState({ error: err });
			});
	}

	render() {
		return (
			<div className="App">
				<nav className="nav-bar">
					<h1 className="nav-header">Tico S. Thepsourinthone</h1>
					<ul className="nav-links">
						<NavLink exact to="/"><a href="#">Home</a></NavLink>
						<NavLink to="/friends"><a href="#">My Friends</a></NavLink>
						<NavLink to="/friends/add"><a href="#">Add Friend</a></NavLink>
					</ul>
            	</nav>
				<Route 
					exact
					path="/" 
					render={
						props => <Home {...props} />
					} 
				/> 

				<Route 
					exact
					path="/friends" 
					render={
						props => <FriendsList {...props} friends={this.state.friends} />
					} 
				/> 

				<Route 
					path="/friends/add"
					render={
						props => <NewFriendForm />
					}
				/>
			</div>
		);
	}
}

export default App;
