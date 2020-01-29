import React from 'react';

function SearcBox({ searchChange, searchField }) {
	return (
		<div className="pa2">
			<input
				className="pa3 ba b--blue bg-lightest-green"
				type="search"
				placeholder="Search Friends"
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearcBox;
