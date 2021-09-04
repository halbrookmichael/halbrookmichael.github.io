import React from 'react';

import '../styles/service.scss';

const Service = (props) => {
	return (
		<div className="service container">
			<div className="service-head">
				<h2 className="service-title">{props.service}</h2>
			</div>
			<div className="service-body">
				<p>{props.serviceDesc}</p>
			</div>
			
		</div>
	)
}

export default Service;