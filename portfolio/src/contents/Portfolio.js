import React, { Component } from 'react';
import PortfolioItem from '../components/PortfolioItem';

import '../styles/home.scss';
import '../styles/portfolio.scss';

class Portfolio extends Component {

	render() {
		return (
			<div id="portfolio">
				<div className="head content">
					<h1>Portfolio</h1>
				</div>
				<PortfolioItem />
			</div>
		)
	}
}

export default Portfolio;