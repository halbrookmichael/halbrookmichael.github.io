import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/home.scss';
import data from '../data/data.json'; 

const portfolioItems = data.portfolio.design;

const PortfolioItemDesign = (props) => {

	return (
		<div className="portfolio-items">
			{portfolioItems.map((item, index) => (
				<Link key={index} 
					to={{
						pathname: 'portfolioDetailDesign',
						data: item
					}}>
					<div className="portfolio-item">
						<div className="highlight">
							<h2>{item.title}</h2>
						</div>
						<img src={item.img} alt='' />
					</div>
				</Link>
			))}
			
		</div>
	)
}

export default PortfolioItemDesign;