import React, { Component } from 'react';
import MainCarousel from './MainCarousel';
import Subtitle from './Subtitle';

class Home extends Component {
	render() {
		return (
			<div className="container-fluid" style={{ fontSize: 40 }}>
				AMUÉBLATE
				<h5>Vive con color</h5>
				<h2>
					<Subtitle />
				</h2>
				<h2>
					<MainCarousel />
				</h2>
			</div>
		);
	}
}

export default Home;
