import React from 'react';
import { Button } from 'react-bootstrap';

import '../styles/service.scss';

import Icon from '../components/Icon';

const Service = (props) => {
	return (
		<div className="service card">
			<div className="service-head">
				<Icon icon={props.icon} size="4x" />
				<p className="service-title">{props.service}</p>
			</div>
			<div className="service-body">
				<p>{props.serviceDesc}</p>
			</div>
			<Button classes="btn-primary">{props.btnText}</Button>
		</div>
	)
}

export default Service;