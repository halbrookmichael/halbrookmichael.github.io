import React, { Component } from 'react';

import '../styles/portfolio-detail.scss';

class PortfolioDetailWeb extends Component {
	constructor(props) {
		super(props);

		// get incoming portfolio data
		let data = this.props.location.data;

		this.state = {
			image: data ? data.img : localStorage.getItem('image'),
			imageMobile: data ? data.imgMobile : localStorage.getItem('imageMobile'),
			title: data ? data.title : localStorage.getItem('title'),
			link: data ? data.link : localStorage.getItem('link'),
			description: data ? data.description : localStorage.getItem('description'),
			technologies: data ? data.technologies : localStorage.getItem('technologies')
		}

		if(data) {
			localStorage.setItem('image', data.img);
			localStorage.setItem('imageMobile', data.imgMobile);
			localStorage.setItem('title', data.title);
			localStorage.setItem('link', data.link);
			localStorage.setItem('description', data.description);
			localStorage.setItem('technologies', data.technologies);
		}
	}
	
	render() {
		return (
			<div id="portfolio-detail" className="container">
				<h2>Design</h2>
				<div className="port-images">
					<img src={this.state.image} alt=""/>
					{/* {
						this.state.imageMobile 
						?
						<img src={this.state.imageMobile} alt=""/> 
						:
						null
					} */}
					
				</div>
				<div className="detail">
					<a className="nav-link" href={this.state.link}>{this.state.title}</a>
					<h3>The Ask</h3>
					<p>{this.state.description}</p>
					<h3>Technologies</h3>
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
			</div>
		);	
	}
}

export default PortfolioDetailWeb;