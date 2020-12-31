import React from 'react';
import PortfolioItem from '../components/PortfolioItem';

import '../styles/home.scss';
import '../styles/portfolio.scss';

const Portfolio = () => {
	return (
		<div id="portfolio" className="container">
			<PortfolioItem />
		</div>
	)
}

export default Portfolio;