import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import NewFriendForm from './components/NewFriendForm';
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
						<a href="https://lambdaschoool.com">Home</a>
						<a href="https://lambdaschoool.com">My Friends</a>
						<a href="https://lambdaschoool.com">Add Friend</a>
					</ul>
				</nav>
				<div className="welcome-div">
					<h2 className="welcome-header">Welcome to My #CowabungaCodeFam!</h2>
				</div>
				<FriendsList friends={this.state.friends} />
				<NewFriendForm />
			</div>
		);
	}
}

export default App;
