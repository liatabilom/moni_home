import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Invierno from './Invierno.jpg';

class MainCarrousel extends Component {
	state = {
		loaded: true,
	};

	carousel = () => {
		if (this.state.loaded === true) {
			return (
				<div>
					<Carousel
						autoPlay={true}
						showThumbs={false}
						showStatus={false}
						transition={5000}
						swipeScrollTolerance={1}
						infiniteLoop={true}
					>
						<div>
							<p className="legend">PRIMAVERA</p>
							<img src={Invierno} alt="Woolworths" />
						</div>
						<div>
							<p className="legend">INVIERNO</p>
							<img src={Invierno} alt="Zara Woman" />
						</div>
						<div>
							<p className="legend">VERANO</p>
							<img src="https://i.imgur.com/BfDlSHt.png" alt="Banana Republic" />
						</div>
						<div>
							<p className="legend">OTOÑO</p>
							<img src="https://i.imgur.com/NOrvITL.png" alt="Brooks Brothers" />
						</div>
					</Carousel>
				</div>
			);
		}
	};

	render() {
		return (
			<div>
				<h1>
					<div className="carousel">{this.carousel()}</div>
				</h1>
			</div>
		);
	}
}

export default MainCarrousel;
