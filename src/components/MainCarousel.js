import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Mov1 from './Mov1.jpg';
import Mov2 from './Mov2.jpg';
import Mov3 from './Mov3.jpg';
import Mov4 from './Mov4.jpg';

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
							<img src={Mov1} alt="Woolworths" />
						</div>
						<div>
							<p className="legend">INVIERNO</p>
							<img src={Mov2} alt="Zara Woman" />
						</div>
						<div>
							<p className="legend">VERANO</p>
							<img src={Mov3} alt="Banana Republic" />
						</div>
						<div>
							<p className="legend">OTOÑO</p>
							<img src={Mov4} alt="Brooks Brothers" />
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
