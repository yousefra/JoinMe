import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Map extends Component {
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
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyDZ0Us2D2X0qtPSpTVL9xO9D5eW6Gq5xgE' }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
				>
					<AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
				</GoogleMapReact>
			</div>
		);
	}
}
