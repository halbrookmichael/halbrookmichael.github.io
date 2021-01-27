import React from 'react';
import PortfolioItemWeb from '../components/PortfolioItemWeb';
import PortfolioItemDesign from '../components/PortfolioItemDesign';

import '../styles/home.scss';
import '../styles/portfolio.scss';

const Portfolio = () => {
	return (
		<div id="portfolio" className="container">
			<h2>WEB</h2>
			<PortfolioItemWeb />
			<h2>DESIGN</h2>
			<PortfolioItemDesign />

		</div>
	)
}

export default Portfolio;