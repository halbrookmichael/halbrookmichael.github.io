import { motion } from "framer-motion"
import PortfolioItem from '../components/PortfolioItem'

import '../styles/portfolio.scss'

import data from '../data/data.json'

const Portfolio = () => {

	return (
		<motion.div exit={{opacity: 0}} id="portfolio" className="container">
			<PortfolioItem portItems={data.portfolio}/>
		</motion.div>
	)
}

export default Portfolio;