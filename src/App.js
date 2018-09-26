import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users}));

	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value })
		// console.log(filteredRobots);
	}
	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className="tc">
				<h1 className="f2">RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots ={ filteredRobots }/>
			</div>
		);
	}
}

export default App;