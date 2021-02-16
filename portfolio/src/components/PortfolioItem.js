import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.scss'

const PortfolioItem = ({ portItems }) => {
	const [portArray, setPortArray] = useState([])

	if(portArray.length === 0 )
		setPortArray(portItems.web)

	return (
		<div className="portfolio-items">
			{portArray.map((item, index) => (
				<Link 
					key={index} 
					to={{
						pathname: 'portfolioDetail',
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