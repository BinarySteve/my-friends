import React from 'react';

function Scroll(props) {
	return (
		<div
			style={{
				overflow: 'auto',
				border: '5px solid black',
				height: '700px'
			}}
		>
			{props.children}
		</div>
	);
}

export default Scroll;
