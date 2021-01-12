import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/home.scss';
import data from '../data/data.json'; 

const portfolioItems = data.portfolio;

const PortfolioItem = (props) => {

	return (
		<div>
			{portfolioItems.map((item, index) => (
				<Link className="portfolio-item" key={index} 
					to={{
						pathname: '/portfolioDetail',
						data: item
					}}>
					<div>
						<div className="highlight">
							<h2>{item.title}</h2>
						</div>
						<img src={item.img} alt='' />
					</div>
					<p>{item.description}</p>
				</Link>
			))}
		</div>
	)
}

export default PortfolioItem;