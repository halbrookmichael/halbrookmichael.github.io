import { useState, useEffect } from 'react';
import NavItem from './NavItem';
import HamburgerMenu from 'react-hamburger-menu'

import logo from '../img/altered_pixels_logo.svg';
import '../styles/nav.scss';

const Navigation = (props) =>  {
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    let href = window.location.href.split('/');

    if(href[3] === '')
      document.querySelector('.home').classList.add('active');
    else if(href[3] === 'portfolioDetail')
      document.querySelector('.portfolio').classList.add('active');
    else
      document.querySelector(`.${href[3]}`).classList.add('active');
  }, [])

  const handleLink = (e) => {
    let link = document.querySelectorAll('li a')
    let currentLink = e.target;

    link.forEach((item) => {
      item.classList.remove('active')
    })

    currentLink.classList.add('active')

    if(window.innerWidth <= 767) {
      handleMenu()
    }
  }
  const handleMenu = () => {
    let body = document.querySelector('body');
    setIsOpen(!isOpen)

    !isOpen ? body.style.overflow = 'hidden' : body.style.overflow = 'initial'
  }
  
  return (
    <div className="main-nav ">
      <nav className="nav-inner container-fluid">
        <a href="/" className="logo ">
          <img src={logo} alt=""/>
        </a>
        <HamburgerMenu
          className='hamburger'
          isOpen={isOpen}
          menuClicked={handleMenu}
          width={30}
          height={18}
          strokeWidth={3}
          rotate={0}
          color='#444'
          borderRadius={0}
          animationDuration={0.5}
        />
        <ul className={`links ${isOpen ? 'open' : ''}`}>
          <NavItem addedClasses="home" item='Home' toLink='/' handleClick={handleLink} />
          <NavItem addedClasses="portfolio" item='Work' toLink='/portfolio' handleClick={handleLink} />
          <NavItem addedClasses="testimonials" item='Happy Clients' toLink='/testimonials' handleClick={handleLink} />
          <NavItem addedClasses="about" item='About' toLink='/about' handleClick={handleLink} />
          {/* <NavItem addedClasses="contact" item='Contact' toLink='/contact' handleClick={handleLink} /> */}
          <div className="logo-links">
            <img src={logo} alt=""/>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation;