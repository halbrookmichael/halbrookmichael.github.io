import React, { Component } from 'react';
import { motion } from 'framer-motion';

import '../styles/home.scss';
import data from '../data/data.json'; 
import Service from '../components/Service';
import ContactForm from '../components/ContactForm';

import logo from '../img/altered_pixels_logo.svg';

const services = data.services;

class Home extends Component {
	
	render() {
		return (
			<motion.div exit={{opacity: 0}} id="home">
				<section className="head" style={{backgroundImage: `url(${data.home.bg})`}}>
					<div className="overlay"></div>
						<div className="head-text container">
							<img className="logo" src={logo} alt=""/>
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
				<section className="contact container">
					<div className="ready-text">
						<h2>READY TO GET STARTED CREATING YOUR WEB PRESENCE?</h2>
						<p>Fill out the form and let us know a little about the task at hand and we will get back to you as soon as possible!</p>
					</div>
					<ContactForm />
				</section>
			</motion.div>
		)
	}
}

export default Home;