import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ReCAPTCHA from "react-google-recaptcha";

import Button from './Button';
import '../styles/form.scss';

// Email validation
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

// Form validation
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === '' && (valid = false);
  });

  return valid;
};

const recaptchaRef = React.createRef();

class ContactForm extends Component {
  
  constructor(props) {
		super(props);
		
    this.state = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      formErrors: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      },
    };
  }

  toastifySuccess() {
    toast.success('We have recieved your request and will get back to you soon!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
    });
  }

  toastifyFail() {
    toast.error('Form failed to send!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback fail',
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const recaptchaValue = recaptchaRef.current.getValue();
    this.props.onSubmit(recaptchaValue);

    if (formValid(this.state)) {
      // Handle form validation success
      const { name, email, phone, subject, message } = this.state;

      // Set template params
      let templateParams = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
      };

      emailjs.send('service_r06upgp', 'template_bwvxpbn', templateParams, 'user_pRfnIeHwHP6WB1M8OaAhu');

      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `);
      
      this.toastifySuccess();
      this.resetForm();
    } else {
      // Handle form validation failure
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
      this.toastifyFail();
    }
  };

  // Function to reset form
  resetForm() {
    this.setState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'name':
        formErrors.name = value.length < 1 ? 'Please enter your name.' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'Please enter a valid email address.';
        break;
      case 'phone':
        formErrors.phone = value.length < 1 ? 'Please enter a valid phone number.' : '';
        break;
      case 'subject':
        formErrors.subject = value.length < 1 ? 'Please enter a subject.' : '';
        break;
      case 'message':
        formErrors.message = value.length < 1 ? 'Please enter a message' : '';
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  onChange= (value) => {
    console.log("Captcha value:", value);
  }

  render() {
    const { formErrors } = this.state;

    return (
      <div className='ContactForm'>
        <form id='contact-form' onSubmit={this.onSubmit} noValidate>
          <div className='row'>
            <div className='col-md-6 col-sm-12'>
              <input
                type='text'
                name='name'
                value={this.state.name}
                className={`form-control formInput name ${formErrors.name.length > 0 ? 'error' : null}`}
                onChange={this.handleChange}
                placeholder='Name'
                noValidate
              ></input>
              {formErrors.name.length > 0 && (
                <span className='errorMessage'>{formErrors.name}</span>
              )}
            </div>
            <div className='col-md-6 col-sm-12'>
              <input
                type='email'
                name='email'
                value={this.state.email}
                className={`form-control formInput ${formErrors.email.length > 0 ? 'error' : null}`}
                onChange={this.handleChange}
                placeholder='Email'
                noValidate
              ></input>
              {formErrors.email.length > 0 && (
                <span className='errorMessage'>{formErrors.email}</span>
              )}
            </div>
          </div>
          <div className='row'>
						<div className='col-md-6 col-sm-12'>
              <input
                type='tel'
                name='phone'
                value={this.state.phone}
                className={`form-control formInput phone ${
                  formErrors.phone.length > 0 ? 'error' : null
                }`}
                onChange={this.handleChange}
                placeholder='Phone'
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                maxLength="10"
                noValidate
              ></input>
              {formErrors.subject.length > 0 && (
                <span className='errorMessage'>{formErrors.phone}</span>
              )}
            </div>
            <div className='col-md-6 col-sm-12'>
              <input
                type='subject'
                name='subject'
                value={this.state.subject}
                className={`form-control formInput ${
                  formErrors.subject.length > 0 ? 'error' : null
                }`}
                onChange={this.handleChange}
                placeholder='Subject'
                noValidate
              ></input>
              {formErrors.subject.length > 0 && (
                <span className='errorMessage'>{formErrors.subject}</span>
              )}
            </div>
          </div>
					<div className="row">
						<div className='col-12'>
              <textarea
                rows='5'
                name='message'
                value={this.state.message}
                className={`form-control formInput ${
                  formErrors.message.length > 0 ? 'error' : null
                }`}
                onChange={this.handleChange}
                placeholder='Message'
                noValidate
              ></textarea>
              {formErrors.message.length > 0 && (
                <span className='errorMessage'>{formErrors.message}</span>
              )}
            </div>
					</div>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6Ldh_WsdAAAAALGcT-pUrEQmdluh786lfA_pour7"
            onChange={onChange}
          />
					<div className="submit-btn-container">
						<Button className='btn btn-primary submit-btn' text="Let's Do This" type='submit' />
					</div>	
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default ContactForm;