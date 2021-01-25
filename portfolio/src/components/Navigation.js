import React, { Component } from 'react';
import NavItem from './NavItem';

import Hamburger from '../../node_modules/hamburger-react';
import logo from '../img/altered_pixels_logo.svg'

import '../styles/nav.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
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
    
    this.setState({ isOpen: false });
    this.forceUpdate();
    console.log(this.props.toggled)

    link.forEach((item) => {
      item.classList.remove('active');
    })

    currentLink.classList.add('active');
  }
  handleMenu() {
    console.log('called')
    this.setState({ isOpen: !this.state.isOpen });
    console.log(this.state.isOpen)
  }

  render() {

    return (
      <div className="main-nav ">
        <nav className="nav-inner container">
          <div className="mobile" onClick={this.handleMenu}>
            <Hamburger label="show menu" />
          </div>
          <a href="/" className="logo ">
            <img src={logo} alt=""/>
          </a>
          <ul className={`links ${this.state.isOpen ? 'open' : ''}`}>
            <NavItem addedClasses="home" item='Home' toLink='/' handleClick={this.handleLink} />
            <NavItem addedClasses="portfolio" item='Work' toLink='/portfolio' handleClick={this.handleLink} />
            <NavItem addedClasses="about" item='About' toLink='/about' handleClick={this.handleLink} />
            <NavItem addedClasses="testimonials" item='Happy Clients' toLink='/testimonials' handleClick={this.handleLink} />
            {/* <NavItem addedClasses="contact" item='Contact' toLink='/contact' handleClick={this.handleLink} /> */}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;