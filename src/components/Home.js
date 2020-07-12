import React, { Component } from 'react';
import MainCarousel from './MainCarousel';
import Subtitle from './Subtitle';

class Home extends Component {
	render() {
		return (
			<div className="container-fluid" style={{ fontSize: 40 }}>
				AMUÉBLATE
				<Subtitle />
				<MainCarousel />
			</div>
		);
	}
}

export default Home;
