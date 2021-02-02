import React from 'react';
import { motion } from 'framer-motion';

import Testimonial from '../components/Testimonial';

import '../styles/home.scss';
// import '../styles/testimonials.scss';

const Testimonials = (props) => {
	return (
		<motion.div exit={{opacity: 0}} id="testimonials" className="container">
			<Testimonial />
		</motion.div>
	)
}

export default Testimonials;