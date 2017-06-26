import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends Component {

  render() {
    return (

      <div className = "WelcomePage">
        <p>
          A NC State Sophmore with a knack for programming
        </p>
        <div className = "Nav">
          - Use the buttons below to navigate -
        </div>
      </div>
    );
  }
}

export default Welcome;
