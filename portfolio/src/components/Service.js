import React from 'react';

import '../styles/service.scss';

const Service = (props) => {
	return (
		<div className="service container">
			<div className="service-head">
				<p className="service-title">{props.service}</p>
			</div>
			<div className="service-body">
				<p>{props.serviceDesc}</p>
				<div className="view-more">
					{/* <Button classes="btn-primary">{props.btnText}</Button> */}
				</div>
			</div>
			
		</div>
	)
}

export default Service;