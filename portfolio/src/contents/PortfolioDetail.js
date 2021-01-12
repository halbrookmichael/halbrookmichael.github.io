import React, { useState, useEffect } from 'react';

import '../styles/portfolio-detail.scss';

const PortfolioDetail = (props) => {
	const { data } = props.location;
	const portfolioItem = useState(data);
	
	useEffect(() => {
		localStorage.setItem('profile-item', JSON.stringify(portfolioItem))
	})

	return (
		<div id="portfolio-detail" className="container">
			<a href="https://www.bsideboardgamesandpuzzles.com/">{portfolioItem.title}</a>
			<img src={portfolioItem.img} alt=""/>
			<div className="detail">
				<div>
					<h3>Overview</h3>
					<p>{portfolioItem.description}</p>
					<ul className="technologies">
						<h3>Technologies</h3>
						{portfolioItem.technologies.map((item, index) => (
							<li key={index}>{item.technology}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default PortfolioDetail;