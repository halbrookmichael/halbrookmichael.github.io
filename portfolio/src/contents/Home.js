import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

import '../styles/home.scss';
import data from '../data/data.json'; 
import Service from '../components/Service';

const services = data.services;

class Home extends Component {
	
	render() {
		return (
			<div id="home">
				<div className="head content container">
					<h1>{data.home.title}</h1>
					<h4>{data.home.tagline}</h4>
				</div>
				<div className="content about container">
					<div className="about-text">
						<h2>{data.home.aboutTitle}</h2>
						<p>{data.home.about}</p>
					</div>
					<a href="/contact">
						<Button>
							Let's Chat
						</Button>
					</a>
				</div>
				<div className="content">
					<div className="services">
						{services.map((service, index) => (
							<Service key={index} className="col-sm" iconColor="#205493" service={service.service} icon={service.icon} serviceDesc={service.description} btnText={service.btnText} />
						))}
					</div>
				</div>
			</div>
		)
	}
}

export default Home;