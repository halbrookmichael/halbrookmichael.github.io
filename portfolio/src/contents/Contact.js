import React from 'react';
import { motion } from 'framer-motion';

import ContactForm from '../components/ContactForm';

import '../styles/contact.scss';

const Contact = (props) => {
	 
	return (
		<motion.div exit={{opacity: 0}} id="contact" className="container">
			<ContactForm />
		</motion.div>
	)
}

export default Contact;