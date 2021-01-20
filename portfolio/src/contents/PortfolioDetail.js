import React, { Component } from 'react';

import '../styles/portfolio-detail.scss';

class PortfolioDetail extends Component {
	constructor(props) {
		super(props);

		// get incoming portfolio data
		let data = this.props.location.data;

		this.state = {
			image: data ? data.img : localStorage.getItem('image'),
			title: data ? data.title : localStorage.getItem('title'),
			link: data ? data.link : localStorage.getItem('link'),
			description: data ? data.description : localStorage.getItem('description'),
			technologies: data ? data.technologies : localStorage.getItem('technologies')
		}

		if(data) {
			localStorage.setItem('image', data.img);
			localStorage.setItem('title', data.title);
			localStorage.setItem('link', data.link);
			localStorage.setItem('description', data.description);
			localStorage.setItem('technologies', data.technologies);
		}
	}
	
	render() {
		return (
			<div id="portfolio-detail" className="container">
				<img src={this.state.image} alt=""/>
				<div className="detail">
					<h3>Overview</h3>
					<a href={this.state.link}>{this.state.title}</a>
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

export default PortfolioDetail;