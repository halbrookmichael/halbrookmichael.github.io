import { motion } from "framer-motion"
import PortfolioItem from '../components/PortfolioItem'
import ScrollAnimation from 'react-animate-on-scroll'

import "animate.css/animate.min.css";
import '../styles/portfolio.scss'

import data from '../data/data.json'

const Portfolio = () => {

	return (
		<ScrollAnimation animateIn='animate__fadeInUp' animateOnce={true}>
			<motion.div exit={{opacity: 0}} id="portfolio" className="container">
				<PortfolioItem portItems={data.portfolio}/>
			</motion.div>
		</ScrollAnimation>
	)
}

export default Portfolio;