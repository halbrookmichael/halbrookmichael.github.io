import React, { Component } from 'react';

import '../styles/service.scss';

import Icon from '../components/Icon';
import Button from '../components/Button';

class Service extends Component {

	render() {
		return (
			<div className="service card">
				<div className="head">
					<Icon icon={this.props.icon} size="4x" />
					<p className="service-title">{this.props.service}</p>
				</div>
				<div className="service-body">
					<p>{this.props.serviceDesc}</p>
				</div>
				<Button buttonText={this.props.btnText} classes="btn-primary" />
			</div>
		)
	}
}

export default Service;