import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = (props) => {
	return (
		<FontAwesomeIcon size={props.size} 
						 className="faIcon" 
				         icon={props.icon} 
		/>
	)
}

export default Icon;