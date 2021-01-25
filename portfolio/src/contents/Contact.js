import React, { Component } from 'react';

import ContactForm from '../components/contactForm';

import '../styles/contact.scss';

class Contact extends Component {
	  constructor(props) {
    	super(props);
			this.state = {
				name: "",
				email: "",
				feedback: "",
			};
		}
		handleInputChange(event) {
			event.preventDefault();
			const target = event.target;
			const name = target.name;
			const value = target.value;
			this.setState({ [name]: value });
  	}
	
	render() {
		return (
			<div id="contact" className="container">
				<ContactForm />
			</div>
		)
	}
}

export default Contact;