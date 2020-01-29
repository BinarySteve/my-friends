import React, { Component } from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import '../containers/App.css';

import { setSearchField } from '../actions'
const mapStateToProps = state => {
	return {
		searchField: state.searchField
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}
class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((users) => this.setState({ robots: users }));
	}
	render() {
		const { robots } = this.state;
		const { searchField, onSearchChange } = this.props
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return !robots.length ? (
			<h1 className="tc f1">Retrieving Friends</h1>
		) : (
				<div className="tc">
					<h1 className="f1">MyFriends</h1>
					<SearchBox searchChange={onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots} />
						</ErrorBoundry>
					</Scroll>
				</div>
			);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
