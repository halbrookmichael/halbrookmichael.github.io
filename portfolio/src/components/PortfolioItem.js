import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.scss'

const PortfolioItem = ({ portItems }) => {
	const [portArray, setPortArray] = useState([])

	if(portArray.length === 0 )
		setPortArray(portItems.items)

	return (
		<div className="portfolio-items">
			{
			portArray.map((item, index) => (
				// item.type === 'web' ?
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
				// :
					// <div key={index} className="portfolio-item design">
					// 	<div className="highlight">
					// 		<h2>{item.title}</h2>
					// 	</div>
					// 	<img src={item.img} alt='' />
					// </div>
			))
			}
		</div>
		)
}

export default PortfolioItem;