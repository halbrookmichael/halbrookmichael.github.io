import React, { Component } from 'react';

import '../styles/home.scss';
import data from '../data/data.json'; 
import Service from '../components/Service';
import ContactForm from '../components/ContactForm';

const services = data.services;

class Home extends Component {
	
	render() {
		return (
			<div id="home">
				<section className="head" style={{backgroundImage: `url(${data.home.bg})`}}>
					<div className="overlay"></div>
						<div className="head-text container">
							<h1>{data.home.title}</h1>
							<h4>{data.home.tagline}</h4>
						</div>
				</section>
				<section className="services-container">
					<div className="services container">
						{services.map((service, index) => (
							<Service key={index} className="col-sm" iconColor="#205493" service={service.service} serviceDesc={service.description} btnText={service.btnText} />
						))}
					</div>
				</section>
				<section>
					<ContactForm />
				</section>
			</div>
		)
	}
}

export default Home;