import React, { Component } from 'react';
import { Button, Modal, TextInput, Textarea } from 'react-materialize';
import './AddButton.css';

const trigger = (
	<Button floating large className="red absolute" waves="light" icon="add" />
);

const add = [
	<Button flat waves="light" modal="close">
		Close
	</Button>,
	<Button waves="light" style={{ marginRight: '5px' }}>
		button
	</Button>
];

export default class AddButton extends Component {
	render() {
		return (
			<div>
				<Modal header="Modal Header" trigger={trigger} actions={add}>
					<TextInput label="Your Name" />
					<TextInput label="Candidates No." type="Number" />
					<TextInput label="Meal (optional)" />
					<Textarea label="Notes (optional)" />
				</Modal>
			</div>
		);
	}
}
