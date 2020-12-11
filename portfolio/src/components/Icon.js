import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/icon.scss';

class Icon extends Component {
	render() {
		return (
			<FontAwesomeIcon size={this.props.size} className="faIcon" icon={this.props.icon} />
		)
	}
}

export default Icon;