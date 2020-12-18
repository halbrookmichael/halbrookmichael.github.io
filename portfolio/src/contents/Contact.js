import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
			<section id="contact" className="container">
				<Form method="post" enctype="text/plain">
					<Form.Group controlId="formBasicEmail">
						<Form.Control type="email" placeholder="Email address" />
						<Form.Text className="text-muted">
							I'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group controlId="formTextArea">
						<Form.Control as="textarea" type="text" placeholder="Tell me what's needed" />
					</Form.Group>
					<Button variant="primary" type="submit">
							Submit
					</Button>
					</Form>
			</section>
		)
	}
}

export default Contact;