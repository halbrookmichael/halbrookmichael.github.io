import ScrollAnimation from 'react-animate-on-scroll'

import "animate.css/animate.min.css";
import '../styles/testimonial.scss';
import data from '../data/data.json';

const testimonials = data.testimonials;

const Testimonial = (props) => {
	return (
		<div>
			{testimonials.map((item, index) => (
				<div key={index} className="testimonial">
					<div className="testimonial-inner">
						<div className="testimonial-detail">
							<ScrollAnimation animateIn='animate__fadeInLeft' animateOnce={true}>
								<div className="testimonial-name">
									<h3>{item.author}</h3>
									<p className="position">{item.position} &#x0007C;&#x0007C; <span>{item.company}</span></p>
								</div>
							</ScrollAnimation>
							<ScrollAnimation animateIn='animate__fadeInLeft' animateOnce={true} delay={400}>
								<div className="testimonial-text">
									<p>{item.testimonialPOne}</p>
									<p>{item.testimonialPTwo}</p>
									<p>{item.testimonialPThree}</p>
								</div>
							</ScrollAnimation>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Testimonial;