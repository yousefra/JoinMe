import React, { Component } from 'react';
import { GoogleApiWrapper, Marker, Map } from 'google-maps-react';
import AddButton from '../AddButton/AddButton';

export class MainMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tempMarker: [],
			markers: [] // TODO: Get From DB
		};
		this.onClick = this.onClick.bind(this);
	}

	onClick(t, map, coord) {
		const { latLng } = coord;
		const lat = latLng.lat();
		const lng = latLng.lng();

		this.setState(previousState => {
			return {
				tempMarker: [
					{
						title: '',
						name: '',
						position: { lat, lng }
					}
				]
			};
		});
	}

	static defaultProps = {
		center: {
			lat: 32.221839,
			lng: 35.262809
		},
		zoom: 11
	};

	render() {
		return (
			// Important! Always set the container height explicitly
			<div style={{ height: '100vh', width: '100%' }}>
				<AddButton />
				<Map
					google={this.props.google}
					style={{ width: '100%', margin: 'auto' }}
					className={'map'}
					zoom={11}
					onClick={this.onClick}
				>
					{this.state.markers.map((marker, index) => (
						<Marker
							key={index}
							title={marker.title}
							name={marker.name}
							position={marker.position}
						/>
					))}

					{this.state.tempMarker.map((marker, index) => (
						<Marker
							key={index}
							title={marker.title}
							name={marker.name}
							position={marker.position}
						/>
					))}
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyDZ0Us2D2X0qtPSpTVL9xO9D5eW6Gq5xgE'
})(MainMap);
