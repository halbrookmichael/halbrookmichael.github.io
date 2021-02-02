import React from 'react';
import { motion } from 'framer-motion';

import '../styles/home.scss';
import '../styles/about.scss';
import arrowImg from '../img/pexels-jens-johnsson-66100.jpg';
import focusImg from '../img/pexels-maurício-mascaro-712786.jpg';
import moneyImg from '../img/pexels-pixabay-259165.jpg';

const About = () => {
	return (
		<motion.div exit={{opacity: 0}} id="about">
            <section className="head" style={{backgroundImage: `url(${arrowImg})`}}>
				<div className="overlay"></div>
				<div className="head-text container">
					<h2>We Are Your Guide</h2>
					<p>When we first decided to do this, we established that we were dedicated to helping small business owners realize their dreams and becoming web relavent without having to mortgage their home to do so. We understand that it's a difficult road, so let us help you navigate it!</p>
				</div>
			</section>
			<section className="about-section">
				<div className="about-text">
					<h4>Focus On What Matters</h4>
					<p>We take the pressure of the web and design off of the small business owner so they can focus on what's most important, THEIR BUSINESS! From Wix websites to full blown custom solutions we are the web are the web crazies you are looking for!</p>
				</div>
				<div className="about-img">
					<img className="focus" src={focusImg} alt=""/>
				</div>
			</section>
			<section className="about-section">
				<div className="about-img">
					<img className="money" src={moneyImg} alt=""/>
				</div>
				<div className="about-text">
					<h4>It's Not All About the Money</h4>
					<p>We understand that opening a new business is expensive and the risks are numerous. That's why we don't want you to pay astronomical fees to create a strong web presence. While we do have to get paid, we want you to as well!</p>
				</div>
			</section>
		</motion.div>
	)
}

export default About;