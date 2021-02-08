import React from 'react';
import { motion } from 'framer-motion';

import '../styles/about.scss';

import data from '../data/data.json';

const About = () => {
	return (
		<motion.div exit={{opacity: 0}} id="about">
      <section className="head" style={{backgroundImage: `url(${data.about.header.img})`}}>
				<div className="overlay"></div>
				<div className="head-text container">
					<h2>{data.about.header.mainText}</h2>
					<p>{data.about.header.tagline}</p>
				</div>
			</section>
			<section className="about-section">
				<div className="about-text">
					<h4>{data.about.sectionOne.mainText}</h4>
					<p>{data.about.sectionOne.tagline}</p>
				</div>
				<div className="about-img">
					<img className="focus" src={data.about.sectionOne.img} alt=""/>
				</div>
			</section>
			<section className="about-section">
				<div className="about-img">
					<img className="money" src={data.about.sectionTwo.img} alt=""/>
				</div>
				<div className="about-text">
					<h4>{data.about.sectionTwo.mainText}</h4>
					<p>{data.about.sectionTwo.tagline}</p>
				</div>
			</section>
		</motion.div>
	)
}

export default About;