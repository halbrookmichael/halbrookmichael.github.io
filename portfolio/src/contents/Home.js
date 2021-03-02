import React, { Component } from 'react'
import { motion } from 'framer-motion'
import ScrollAnimation from 'react-animate-on-scroll'

import Service from '../components/Service'
import ContactForm from '../components/ContactForm'

import '../styles/home.scss'
import "animate.css/animate.min.css"

import logo from '../img/altered_pixels_logo.svg'
import data from '../data/data.json' 

const services = data.services;

class Home extends Component {
	
	render() {
		return (
			<motion.div exit={{opacity: 0}} id="home">
				<section className="head" style={{backgroundImage: `url(${data.home.bg})`}}>
					<div className="overlay"></div>
					<ScrollAnimation animateIn='animate__fadeInUp' animateOnce={true}>
						<div className="head-text container">
							<img className="logo" src={logo} alt=""/>
							<h1>{data.home.title}</h1>
							<h4>{data.home.tagline}</h4>
						</div>
					</ScrollAnimation>
				</section>
				<section className="services-container">
					<ScrollAnimation animateIn='animate__fadeInUp' animateOnce={true} delay={320}>
						<div className="services container">
							{services.map((service, index) => (
								<Service key={index} className="col-sm" iconColor="#205493" service={service.service} serviceDesc={service.description} btnText={service.btnText} />
							))}
						</div>
					</ScrollAnimation>
				</section>
				<section className="contact container">
					<ScrollAnimation animateIn='animate__fadeInUp' animateOnce={true}>
						<div className="ready-text">
							<h2>READY TO GET STARTED CREATING YOUR WEB PRESENCE?</h2>
							<p>Fill out the form and let us know a little about the task at hand and we will get back to you as soon as possible!</p>
						</div>
						<ContactForm />
					</ScrollAnimation>
					
				</section>
			</motion.div>
		)
	}
}

export default Home;