import React, { Component } from 'react';

import Testimonial from '../components/Testimonial';

import '../styles/home.scss';
import '../styles/testimonials.scss';

class Testimonials extends Component {

	render() {
		return (
			<div id="testimonials" className="container">
				<Testimonial />
			</div>
		)
	}
}

export default Testimonials;