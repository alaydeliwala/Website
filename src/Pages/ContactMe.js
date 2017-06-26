import React, { Component } from 'react';
import './ContactMe.css';

class ContactMe extends Component {

  render() {
    return (
      <div className = "ContactMe">
        <div className = "Social">
          <a href="https://www.snapchat.com/add/alaydeliwala" className="snapchat" target="_blank"> Snapchat </a>
          <a href="https://www.linkedin.com/in/alay-deliwala-21876b129/" className="linkedin" target="_blank"> Linkedin </a>
          <a href="https://github.com/alaydeliwala" className="github" target="_blank"> GitHub </a>
        </div>
        <div className = "Hello">
        <p>
          Email:
          <a href="mailto:ahdeliwala@gmail.com"> ahdeliwala@gmail.com</a>
        </p>
        <p>
          <a href="https://github.com/alaydeliwala/Greeps/raw/master/Resume%20Final%20Revised%20Copy.pdf"> Download Resume</a>
        </p>
      </div>
      </div>
    );
  }
}

export default ContactMe;
