import React, { Component } from 'react';

import '../styles/home.scss';
import data from '../data/data.json'; 

import PageTitle from '../components/PageTitle';
import Button from '../components/Button';
import Service from '../components/Service';

const services = data.services;

class Home extends Component {
	
	render() {
		return (
			<section id="home">
				<div className="content head container">
					<PageTitle pageName={data.home.title} />
					<h4>{data.home.tagline}</h4>
				</div>
				<div className="content about">
					<div className="about-text container">
						<p>{data.home.about}</p>
						<a href="/contact"><Button classes="btn-success" buttonText="LET'S CHAT!" /></a>
					</div>
				</div>
				<div className="content container">
					<div className="row services">
						{services.map((service, index) => (
							<Service key={index} className="col-sm" iconColor="#205493" service={service.service} icon={service.icon} serviceDesc={service.description} btnText={service.btnText} />
						))}
					</div>
				</div>
			</section>
		)
	}
}

export default Home;