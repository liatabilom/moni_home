import React, { Component } from 'react';

class Subtitle extends Component {
	render() {
		return (
			<div className="navBar" style={{ fontSize: 18 }}>
				<ul class="nav justify-content-center">
					<li class="nav-item">
						<a class="nav-link active" href="#">
							Dormitorio
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							Comedor
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							Living
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
							Cocina
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Subtitle;
