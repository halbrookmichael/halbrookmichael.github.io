import React from 'react';

import '../styles/testimonial.scss';
import data from '../data/data.json';

const testimonials = data.testimonials;

const Testimonial = (props) => {
	return (
		<div>
			{testimonials.map((item, index) => (
				<div key={index} className="testimonial">
					<div className="testimonial-inner">
						<img src="../img/person-male.png" alt="" />
						<div className="testimonial-detail">
							<div className="testimonial-name">
								<h3>{item.author}</h3>
								<p className="position">{item.position}</p>
								<p>{item.company}</p>
							</div>
							<div className="testimonial-text">
								<p>{item.testimonialPOne}</p>
								<p>{item.testimonialPTwo}</p>
								<p>{item.testimonialPThree}</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Testimonial;