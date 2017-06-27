import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {

  render() {
    return (

      <div className = "Projects">
        <div className = "Proj">
        <a href = "https://github.com/alaydeliwala/RPS" target="_blank">
        <h3>
          RPS
        </h3>
      </a>
        <p>
        RPS is a mobile one player version of the classic Rock Paper Scissors.
        Take your chance against a computer and see who is greater once and for all.
        </p>
        <div className = "Expand">
        <a href = "https://github.com/alaydeliwala/RPS" target="_blank">
        <p>
          Read More...
        </p>
      </a>
        </div>
        </div>
      </div>
    );
  }
}

export default Projects;
