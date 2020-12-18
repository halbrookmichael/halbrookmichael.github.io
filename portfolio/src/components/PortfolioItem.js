import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

import Card from "react-bootstrap/Card";

import '../styles/home.scss';
import data from '../data/data.json'; 

const portfolioItems = data.portfolio;

class PortfolioItem extends Component {

	render() {
		return (
			<div className="row">
				{portfolioItems.map((item, index) => (
					<Card key={index} className="portfolio-item">
						<Card.Img variant="top" src={item.img} />
						<Card.Body>
							<Card.Title>{item.title}</Card.Title>
							<Card.Text>
								{item.description}
							</Card.Text>
							<Button variant="primary">{item.btnText}</Button>
						</Card.Body>
					</Card>
				))}
			</div>
		)
	}
}

export default PortfolioItem;