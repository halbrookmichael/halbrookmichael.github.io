import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <li>
      <Link className={`nav-link ${props.addedClasses}`} 
            to={props.toLink} 
            onClick={props.handleClick}>{props.item}
      </Link> 
    </li>
  );
}

export default NavItem;