import React, { Component } from 'react';
import NavItem from './NavItem';

import Hamburger from '../../node_modules/hamburger-react';

import '../styles/nav.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }

    this.handleLink = this.handleLink.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    // this.toggleMobile = this.toggleMobile.bind(this);
  }
  
  componentDidMount() {
    let href = window.location.href.split('/');

    if(href[3] === '')
      document.querySelector('.home').classList.add('active');
    else if(href[3] === 'portfolioDetail')
      document.querySelector('.portfolio').classList.add('active');
    else
      document.querySelector(`.${href[3]}`).classList.add('active');
  }
  handleLink(e) {
    let link = document.querySelectorAll('li a');
    let currentLink = e.target;
    this.setState({ isOpen: !this.state.isOpen });

    link.forEach((item) => {
      item.classList.remove('active');
    })

    currentLink.classList.add('active');
  }
  handleMenu() {
    let links = document.querySelector('.links');

    if(!links.classList.contains('open')) 
      this.setState({ isOpen: true });
    else if(links.classList.contains('open'))
      this.setState({ isOpen: false });
  }

  render() {

    return (
      <div className="main-nav">
        <div className="mobile" onClick={this.handleMenu}>
          <Hamburger />
        </div>
        <ul className={`links container ${this.state.isOpen ? 'open' : null}`}>
          <NavItem addedClasses="home" item='Home' toLink='/' handleClick={this.handleLink} />
          <NavItem addedClasses="portfolio" item='Portfolio' toLink='/portfolio' handleClick={this.handleLink} />
          <NavItem addedClasses="about" item='About' toLink='/about' handleClick={this.handleLink} />
          <NavItem addedClasses="testimonials" item='Testimonials' toLink='/testimonials' handleClick={this.handleLink} />
          <NavItem addedClasses="contact" item='Contact' toLink='/contact' handleClick={this.handleLink} />
        </ul>
      </div>
    );
  }
}

export default Navigation;