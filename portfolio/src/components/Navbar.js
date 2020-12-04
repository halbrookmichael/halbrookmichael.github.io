import React, { Component } from 'react';
import NavItem from './NavItem';
import '../styles/Nav.scss';

class Navbar extends Component {
   constructor(props) {
    super(props);
    this.state = {
      NavItemActive: '',
    };
  }

  activeitem = (id) => {
    if (this.state.NavItemActive.length > 0) {
      document.getElementById(this.state.NavItemActive).classList.remove('active');
    }
    this.setState({ NavItemActive: id }, () => {
      document.getElementById(this.state.NavItemActive).classList.add('active');
    });
  };

  render() {
    return (
      <nav>
        <ul>
          <NavItem item='Home' toLink='/' activec={this.activeitem}/>
          <NavItem item='About' toLink='/about' activec={this.activeitem}/>
          <NavItem item='Education' toLink='/education' activec={this.activeitem}/>
          <NavItem item='Portfolio' toLink='/portfolio' activec={this.activeitem}/>
          <NavItem item='Contact' toLink='/contact' activec={this.activeitem}/>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
