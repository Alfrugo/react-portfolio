import React, { useState } from 'react';
import "../css/contact.css";


function Contact() {


  return (
          <div className="container">

        <form className="form" id="form">
            <div className="form-control">
                <label>Name</label>
                <input type="text" placeholder="alfrugo" id="username" />
                <i className="fas fa-check-circle"></i>
                <i className="fas fa-exclamation-circle"></i> 
                <small>Error Message</small>
            </div>
            <div className="form-control">
                <label>Email</label>
                <input type="email" placeholder="alfrugo@gmail.com" id="email" />
                <i className="fas fa-check-circle"></i>
                <i className="fas fa-exclamation-circle"></i>
                <small>Error Message</small>
            </div>
            <button>Sign up</button>
          </form>

          <script src="script.js"> </script>
          </div>
    
  );
}

export default Contact;