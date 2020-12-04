import React, { Component } from 'react';

class Button extends Component {
	
  render() {
    return (
      <button className={`btn ${this.props.classes}`}>{this.props.buttonText}</button>
    );
  }
}

export default Button;