import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavItem extends Component {

  render() {
    return (
      <li>
        <Link className={`nav-link ${this.props.addedClasses}`} to={this.props.toLink} onClick={this.props.handleClick}>{this.props.item}</Link> 
      </li>
    );
  }
}

export default NavItem;
