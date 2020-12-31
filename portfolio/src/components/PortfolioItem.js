import React, {useState} from 'react';
import {Button, Card} from 'react-bootstrap';
import BaseModal from "./BaseModal";

import '../styles/home.scss';
import data from '../data/data.json'; 

const portfolioItems = data.portfolio;

const PortfolioItem = (props) => {
	let isOpen = false;

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
						<Button variant="primary" onClick={() => {
							isOpen = !isOpen;
						} }>{item.btnText}</Button>
					</Card.Body>
				</Card>
			))}
			<BaseModal show={isOpen}/>
		</div>
	)
}

export default PortfolioItem;