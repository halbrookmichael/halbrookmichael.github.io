import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import '../assets/css/Form.css';

class Login extends Component {
  
  render() {
    return (
     <form action={this.props.action} className={this.props.formClass}>
        <Input inputType="text" id="email" text="Email" placeholder="Email"/>
        <Input inputType="password" id="password" text="Password" placeholder="Password"/>
				<Button buttonText="Login" classes="btn-primary" />
     </form>
    )
  }
}

export default Login;