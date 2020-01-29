import React from 'react';

function Card({ name, email, id }) {
	return (
		<div className="grow bg-blue br3 pa3 ma2 dib bw2 shadow-5">
			<img src={`https://robohash.org/${id}?size=200x200`} alt="photos" />
			<div className="tc">
				<h2> {name} </h2>
				<p> {email} </p>
			</div>
		</div>
	);
}
export default Card;
