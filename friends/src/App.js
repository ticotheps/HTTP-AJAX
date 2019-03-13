import React, { Component } from 'react';
import axios from 'axios';
import Home from './components/Home';
import FriendsList from './components/FriendsList';
import NewFriendForm from './components/NewFriendForm';
import { Route, NavLink} from "react-router-dom";

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

	addFriend = (e, friend) => {
		console.log("The addFriend() function is running.", friend);
		e.preventDefault();
		axios
			.post("http://localhost:5000/friends", friend)
			.then(res => {
				this.setState({
					friends: res.data
				});
				this.props.history.push("/friends");
			})
			.catch(err => {
				console.log(err);
			});
	
	};

	deleteFriend = (e, friend) => {
		console.log("The deleteFriend() function is running.", friend);
		e.preventDefault();
		axios
			.delete(`http://localhost:5000/friends/${friend.id}`)
			.then(res => {
				this.setState({
					friends: res.data
				});
				this.props.history.push("/friends");
			})
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		return (
			<div className="App">
				<nav className="nav-bar">
					<h1 className="nav-header">Tico S. Thepsourinthone</h1>
					<ul className="nav-links">
						<NavLink exact to="/">Home</NavLink>
						<NavLink to="/friends">My Friends</NavLink>
						<NavLink to="/friends/add">Add Friend</NavLink>
					</ul>
            	</nav>
				<Route 
					exact
					path="/" 
					render={props => <Home {...props} />} 
				/> 

				<Route 
					exact
					path="/friends" 
					render={props => (
						<FriendsList 
							{...props} 
							friends={this.state.friends} 
							deleteFriend={this.deleteFriend}
						/>)
					} 
				/> 

				<Route 
					path="/friends/add"
					render={props => (
						<NewFriendForm 
							{...props}
							addFriend={this.addFriend}
						/>)
					}
				/>
			</div>
		);
	}
}

export default App;
