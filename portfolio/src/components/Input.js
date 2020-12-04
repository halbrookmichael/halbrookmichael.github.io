import React, { Component } from 'react';

class Input extends Component {
	
  render() {
    return (
			<div className="form-group">
				<label htmlFor={this.props.inputType}>{this.props.text}</label>
				<input type={this.props.inputType} className="form-control" id={this.props.id} placeholder={this.props.placeholder} />
			</div>
    );
  }
}

export default Input;