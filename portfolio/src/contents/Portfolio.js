import React from 'react';
import { motion } from "framer-motion"
import PortfolioItem from '../components/PortfolioItem';

import '../styles/home.scss';
import '../styles/portfolio.scss';


const Portfolio = (props) => {
	return (
		<motion.div exit={{opacity: 0}} id="portfolio" className="container">
			<PortfolioItem />
		</motion.div>
	)
}

export default Portfolio;