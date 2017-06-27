import React, { Component } from 'react';
import './AboutMe.css';

class Welcome extends Component {

  render() {
    return (

      <div className = "AboutMe">
        <div className = "Me">
          <p>
            Sophomore in Computer science, attending NC State University.
            Enjoys listening to music, munching on candy, trying new things,
            and going on adventures.
          </p>
        </div>
        <div className = "Favorites">
        <h4>Favorites</h4>
          <a href= "https://en.wikipedia.org/wiki/Interstellar_(film)" target="_blank">
            <p>Movie --> Interstellar</p>
          </a>
          <a href= "https://en.wikipedia.org/wiki/Ready_Player_One" target="_blank">
            <p> Book --> Ready Player One</p>
          </a>
          <a href= "https://en.wikipedia.org/wiki/The_Office_(U.S._TV_series)" target="_blank">
            <p> TV Show --> The Office</p>
          </a>
          <a href= "https://en.wikipedia.org/wiki/Batman" target="_blank">
            <p> Super Hero --> Batman</p>
          </a>
        </div>
        <h4>Favorite Songs</h4>
        <iframe src="//tools.applemusic.com/embed/v1/playlist/pl.7a960d4d67144df0ae54d7017840cdb3?country=us"></iframe>
      </div>
    );
  }
}

export default Welcome;
