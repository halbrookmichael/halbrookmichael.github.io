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
			technologies: data ? data.technologies : localStorage.getItem('technologies')
		}

		if(data) {
			localStorage.setItem('image', data.img);
			localStorage.setItem('title', data.title);
			localStorage.setItem('link', data.link);
			localStorage.setItem('technologies', data.technologies.values(data.technologies));
		}		
		
		console.log(data)
	}
	
	render() {
		return (
			<div id="portfolio-detail" className="container">
				<a href={this.state.link}>{this.state.title}</a>
				<img src={this.state.image} alt=""/>
				<div className="detail">
					<div>
						<h3>Overview</h3>
						<p>{this.state.description}</p>
						{/* <ul className="technologies">
							<h3>Technologies</h3>
							{this.state.technologies.map((item, index) => (
								<li key={index}>{item.technology}</li>
							))}
						</ul> */}
					</div>
				</div>
			</div>
		);	
	}
}

export default PortfolioDetail;