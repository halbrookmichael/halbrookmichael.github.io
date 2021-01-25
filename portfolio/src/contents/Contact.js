import React, { Component } from 'react';

import ContactForm from '../components/ContactForm';

import '../styles/contact.scss';

const Contact = (props) => {
	 
	return (
		<div id="contact" className="container">
			<ContactForm />
		</div>
	)
}

export default Contact;