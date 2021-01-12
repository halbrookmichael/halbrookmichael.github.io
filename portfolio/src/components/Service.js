import React from 'react';
import { Button } from 'react-bootstrap';
import Icon from '../components/Icon';

import '../styles/service.scss';

const Service = (props) => {
	return (
		<div className="service container">
			<div className="service-head">
				<Icon icon={props.icon} size="4x" />
				<p className="service-title">{props.service}</p>
			</div>
			<div className="service-body">
				<p>{props.serviceDesc}</p>
				<div className="view-more">
					<Button classes="btn-primary">{props.btnText}</Button>
				</div>
			</div>
			
		</div>
	)
}

export default Service;