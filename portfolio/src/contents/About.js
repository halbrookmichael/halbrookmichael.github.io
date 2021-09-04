import { motion } from 'framer-motion';
import ScrollAnimation from 'react-animate-on-scroll'

import "animate.css/animate.min.css";
import '../styles/about.scss';

import data from '../data/data.json';


const About = () => {

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
				</div>
			</section>
			{/* <section className="about-section-right" style={{backgroundImage: `url(${data.about.header.img})`}}>
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
			</section> */}
		</motion.div>
	)
}

export default About;