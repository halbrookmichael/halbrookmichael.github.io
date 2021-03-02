import React, { Component } from 'react';
import { motion } from 'framer-motion';
import NavItem from '../components/NavItem';

import '../styles/portfolio-detail.scss';

class PortfolioDetail extends Component {
	constructor(props) {
		super(props);

		// get incoming portfolio data
		let data = this.props.location.data;

		this.state = {
			image: data ? data.img : localStorage.getItem('image'),
			imageMobile: data ? data.imgMobile : localStorage.getItem('imageMobile'),
			title: data ? data.title : localStorage.getItem('title'),
			link: data ? data.link : localStorage.getItem('link'),
			askPOne: data ? data.askPOne : localStorage.getItem('askOne'),
			askPTwo: data ? data.askPTwo : localStorage.getItem('askTwo'),
			technologies: data ? data.technologies : localStorage.getItem('technologies'),
			type: data ? data.type : localStorage.getItem('type'),
			hasMobileImg: data ? data.hasMobileImg : localStorage.getItem('hasMobileImg')
		}

		if(data) {
			localStorage.setItem('image', data.img);
			localStorage.setItem('imageMobile', data.imgMobile);
			localStorage.setItem('title', data.title);
			localStorage.setItem('link', data.link);
			localStorage.setItem('askOne', data.askPOne);
			localStorage.setItem('askTwo', data.askPTwo);
			localStorage.setItem('technologies', data.technologies);
			localStorage.setItem('type', data.type);
			localStorage.setItem('hasMobileImg', data.hasMobileImg);
		}
	}
	
	render() {

		return (
			<motion.div exit={{opacity: 0}} id="portfolio-detail" className="container">
				<NavItem addedClasses="back" item='&#8636;' toLink='/portfolio' />
				<div className="port-title-container">
					<a className="nav-link port-title" href={this.state.link}>{this.state.title}</a>
				</div>
				<div className="port-info">
					<div className="desktop">
						<div className={`desktop-image ${this.state.type === 'design' ? 'design' : ''}`}>
							<img src={this.state.image} alt="B-Side desktop"/>
						</div>
						{this.state.type === 'web' &&
							<div className="ask">
								<h3>What We Did</h3>
								<p className="container">{this.state.askPOne}</p>
								{
									this.state.askPTwo === undefined || localStorage.getItem('askTwo') === undefined ?
									''
									:
									<p className="container">{this.state.askPTwo}</p>
								}
							</div>
						}
					</div>
					{this.state.type === 'web' &&
						<div className={`mobile ${this.state.hasMobileImg === 'false' ? 'align-left' : ''}`}>
							<div className='tech'>
								<h3>What We Used</h3>
								{
									Array.isArray(this.state.technologies)
									?
									<ul className="technologies">
										{
											this.state.technologies.map((item, index) => (
												<li key={index}>{item}</li>
											)) 
										}
									</ul>
									: 
									<div className="technologies">
										{
											this.state.technologies.split(',').map((item, index) => (
												<p key={index}>{item}</p>
											))
										}
									</div>	 
								}
							</div>
							<div className={`mobile-image ${this.state.hasMobileImg === 'false' ? 'no-image' : ''}`}>
								<img src={this.state.imageMobile} alt=""/>
							</div>
								
						</div>
					}
				</div>
			</motion.div>
		);	
	}
}

export default PortfolioDetail;