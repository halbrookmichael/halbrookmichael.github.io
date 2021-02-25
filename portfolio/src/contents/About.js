import React from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from 'react-animate-on-scroll'

import "animate.css/animate.min.css";
import '../styles/about.scss';

import windowDimensions from '../helpers/_onResize'

import data from '../data/data.json';
import BSIDE from '../img/logo_box_bside.png'
import WHWF from '../img/logo_box_whwf.png'


const About = () => {
	const { width } = windowDimensions();

	return (
		<motion.div exit={{opacity: 0}} id="about">
			<section className="about-section-left">
				<div className="about-text-left">
					<ScrollAnimation animateIn='animate__fadeInLeft' animateOnce={true}>
						<div className="about-section">
							<h4>What We Do</h4>
							<div className="list">
								<ul>
									<li>Web Design</li>
									<li>Web Development</li>
								</ul>
								<ul>
									<li>Social Media Design</li>
									<li>Social Media Management</li>
								</ul>
								<ul>
									<li>Web Design</li>
									<li>E-Commerce Inventory Management</li>
								</ul>
							</div>
						</div>
					</ScrollAnimation>
					<ScrollAnimation animateIn='animate__fadeInLeft' animateOnce={true} delay={150}>
						<div className="about-section">
							<h4>Why We Do It</h4>
							<p>{data.about.header.tagline}</p>
						</div>
					</ScrollAnimation>
					<ScrollAnimation animateIn='animate__fadeInLeft' animateOnce={true} delay={200}>
						<div className="about-section">
							<h4>Who We Helped</h4>
							<div className="company-logos">
								<div className="logo">
								<a href="https://www.bsideboardgamesandpuzzles.com/"><img src={BSIDE} alt="B-Side logo"/></a>
								</div>
								<div className="logo">
								<a href="https://www.whwfspokane.org/"><img src={WHWF} alt="WHWF logo"/></a>	
								</div>
							</div>
						</div>
					</ScrollAnimation>
					
				</div>
			</section>
			<section className="about-section-right" style={{backgroundImage: `url(${data.about.header.img})`}}>
				<div className="overlay"></div>
				{
					width <= 986 ?
					<ScrollAnimation animateIn='animate__fadeInLeft' animateOnce={true}>
						<div className="about-text-right container">
							<h2>{data.about.header.mainText}</h2>
						</div>
					</ScrollAnimation>
					:
					<ScrollAnimation animateIn='animate__fadeInUp' animateOnce={true} delay={250}>
						<div className="about-text-right container">
							<h2>{data.about.header.mainText}</h2>
						</div>
					</ScrollAnimation>
				}
			</section>
		</motion.div>
	)
}

export default About;