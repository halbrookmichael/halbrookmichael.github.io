import React from 'react';

import '../styles/form.scss';

const ContactForm = (props) => {
	return (
		<form action="">
			<section className="client-info">
				<h4 className="form-section-header"> Tell Us About Yourself</h4>
				<div className="name">
						<div className="form-group">
							<label htmlFor="name">First Name:</label>
							<input type="text" name="lastname" id="lastName"/>
						</div>
						<div className="form-group">
							<label htmlFor="name">Last Name:</label>
							<input type="text" name="firstname" id="firstName"/>
						</div>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input type="email" name="email" id="email"/>
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
				<h4 className="form-section-header">Tell Us A Little About the Project</h4>
				<div className="form-group">
					<label htmlFor="need">How can we help you?</label>
					<input type="textarea" name="need" id="need"/>
				</div>
			</section>
		
			<button type="submit">Talk Soon</button>
		</form>
	)
}

export default ContactForm