import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/icon.scss';

const Icon = (props) => {
	return (
		<FontAwesomeIcon size={props.size} 
									   className="faIcon" 
				             icon={props.icon} 
		/>
	)
}

export default Icon;