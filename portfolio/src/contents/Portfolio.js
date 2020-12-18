import React, { Component } from 'react';
import PortfolioItem from '../components/PortfolioItem';

import '../styles/home.scss';
import '../styles/portfolio.scss';

class Portfolio extends Component {

	render() {
		return (
			<div id="portfolio">
				<PortfolioItem />
			</div>
		)
	}
}

export default Portfolio;