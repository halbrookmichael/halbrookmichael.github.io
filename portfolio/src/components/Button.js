import React, { Component } from 'react';

import '../styles/button.scss';

class Button extends Component {
	
  render() {
    return (
      <button className={`btn ${this.props.classes}`}>{this.props.buttonText}</button>
    );
  }
}

export default Button;