import React, { Component } from 'react';
import './App.css';
import Welcome from './Pages/Welcome.js';
import AboutMe from './Pages/AboutMe.js';
import ContactMe from './Pages/ContactMe.js';

class App extends Component {
  constructor(){
    super();
    this.state={
      page: "ContactMe",
    }
  }
  renderPage(){
    if(this.state.page === "Welcome"){
      return(<Welcome/>)
    }

    else if(this.state.page === "AboutMe"){
      return(<AboutMe/>)
    }

    else if(this.state.page === "Projects"){
      return(<div>Hi</div>)
    }

    else if (this.state.page === "ContactMe"){
      return(<ContactMe/>)
    }
  }

  render() {
    return (
      <div className = "Page">
        <div className = "Header">
          <div className = "Name"> Alay Deliwala </div>
        </div>
          {this.renderPage()}
        <div className="button">
            <button className="button" onClick={() => this.setState({page:"AboutMe"})}>
              <div className="aboutMe">
                  <h1>About Me </h1>
              </div>
          </button>
            <button className="button" onClick={() => this.setState({page:"Projects"})}>
              <div className="contactMe">
                  <h1> Projects </h1>
              </div>
            </button>
            <button className="button" onClick={() => this.setState({page:"ContactMe"})}>
              <div className="social">
                  <h1> Contact Me</h1>
              </div>
            </button>
        </div>
      </div>
    );
  }
}

export default App;
