import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavItem = ({ toLink, data, handleClick, item, addedClasses }) => {
  return (
    <li>
      <Link className={`nav-link ${addedClasses}`} 
            to={{
              pathname: toLink,
              data: data
            }} 
            onClick={handleClick}>
        {item}
      </Link> 
    </li>
  );
}

NavItem.defaultProps = {
  addedClasses: '',
  toLink: '',
  data: [],
  item: ''
}

NavItem.propTypes = {
  addedClasses: PropTypes.string,
  toLink: PropTypes.string,
  data: PropTypes.array,
  item: PropTypes.string
}

export default NavItem;