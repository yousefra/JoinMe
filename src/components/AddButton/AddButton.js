import React, { Component } from 'react';

export default class AddButton extends Component {
	render() {
		return (
			<div>
				<a
					href="#"
					onClick={AddEvent}
					className="btn-floating btn-large waves-effect waves-light red"
				>
					<i className="material-icons">add</i>
				</a>
			</div>
		);
	}
}
