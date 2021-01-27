import React from 'react';

import '../styles/form.scss';

const ContactForm = (props) => {
	return (
		<form className="container" action="">
			<h4 className="form-header">Ready to start?</h4>
			<section className="client-info">
				<div className="name multi-input">
					<div className="form-group">
						{/* <label htmlFor="name">First Name:</label> */}
						<input type="text" name="lastname" id="lastName" placeholder="First Name" />
					</div>
					<div className="form-group">
						{/* <label htmlFor="name">Last Name:</label> */}
						<input type="text" name="lastname" id="lastname" placeholder="Last Name" />
					</div>
				</div>
				<div className="email-phone multi-input">
					<div className="form-group">
						{/* <label htmlFor="email">Email:</label> */}
						<input type="email" name="email" id="email" placeholder="Email" />
					</div>
					<div className="form-group">
						{/* <label htmlFor="email">Phone:</label> */}
						<input type="tel" name="phone" id="phone" placeholder="Phone" />
					</div>
				</div>
			</section>
		
			<section className="services-needed">
				<h4 className="form-section-header">What Services Do You Need</h4>
					<div className="service-group">
						<input type="checkbox" name="design" value="yes"/>
						<label htmlFor="frameworkYes">Web</label>
					</div>
					<div className="service-group">
						<input type="checkbox" name="design" value="yes"/>
						<label htmlFor="frameworkYes">Design</label>
					</div>
					<div className="service-group">
						<input type="checkbox" name="design" value="yes"/>
						<label htmlFor="frameworkYes">Yes</label>
					</div>
			</section>

			<section className="project-description">
				<div className="form-group">
					{/* <label htmlFor="need">How can we help you?</label> */}
					<input type="textarea" name="need" id="need" placeholder="How can we help you?" />
				</div>
			</section>
		
			<button type="submit">Talk Soon</button>
		</form>
	)
}

export default ContactForm