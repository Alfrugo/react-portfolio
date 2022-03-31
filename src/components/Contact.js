import React, { useState } from 'react';
import "../css/contact.css";
// import "./form"

import { validateEmail } from '../utils/helpers';



function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    
<section className="container">
    
    <h1>Contact me</h1>
    <form className="form" id="contact-form">
      <div className="form-control">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email address:</label>
        <input type="email" name="email" />
      </div>
      <div className="form-control">
        <label htmlFor="message">Message:</label>
        <textarea name="message" rows="5" cols="80" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </section>

      
    
  );
}

export default Contact;