import React, { Component } from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import '../containers/App.css';

import { setSearchField, requestFriends } from '../actions'

const mapStateToProps = state => {
	return {
		searchField: state.searchFriends.searchField,
		friends: state.friendsRequest.friends,
		isPending: state.friendsRequest.isPending,
		error: state.friendsRequest.error
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onFriendRequest: () => dispatch(requestFriends())
	}
}
class App extends Component {


	componentDidMount() {
		this.props.onFriendRequest();
	}
	render() {

		const { searchField, onSearchChange, friends, isPending } = this.props
		const filteredFriends = friends.filter((friend) => {
			return friend.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return isPending ? (
			<h1 className="tc f1">Retrieving Friends</h1>
		) : (
				<div className="tc">
					<h1 className="f1">MyFriends</h1>
					<SearchBox searchChange={onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<CardList friends={filteredFriends} />
						</ErrorBoundry>
					</Scroll>
				</div>
			);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
