import React, { Component } from 'react';
import NavItem from './NavItem';

import Icon from '../components/Icon';

import '../styles/nav.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    document.querySelector('.home').classList.add('active');
  }
  handlelink(e) {
    let links = document.querySelectorAll('li a');
    let link = e.target;

    links.forEach((item) => {
      console.log(item)
      item.classList.remove('active');
    })

    link.classList.add('active');
  }

  render() {
    return (
      <div className="main-nav">
        <div className="mobile" onClick={this.handleMenu}>
          <Icon icon="bars" size="lg" />
        </div>
        <ul className="links">
          <NavItem addedClasses="home" item='Home' toLink='/' handleClick={this.handlelink} />
          <NavItem item='Portfolio' toLink='/portfolio' handleClick={this.handlelink} />
          <NavItem item='About' toLink='/about' handleClick={this.handlelink} />
          <NavItem item='Contact' toLink='/contact' handleClick={this.handlelink} />
        </ul>
      </div>
    );
  }
}

export default Navigation;
