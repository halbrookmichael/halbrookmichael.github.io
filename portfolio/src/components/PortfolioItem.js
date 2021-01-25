import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/home.scss';
import data from '../data/data.json'; 

const portfolioItems = data.portfolio;

const PortfolioItem = (props) => {

	return (
		<div className="portfolio-items">
			{portfolioItems.map((item, index) => (
				<Link key={index} 
					to={{
						pathname: '/portfolioDetail',
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

export default PortfolioItem;