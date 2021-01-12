import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <li>
      <Link className={`nav-link ${props.addedClasses}`} 
            to={{
              pathname: props.toLink,
              data: props.data
            }} 
            onClick={props.handleClick}>{props.item}
      </Link> 
    </li>
  );
}

export default NavItem;