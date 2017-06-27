import React, { Component } from 'react';
import './App.css';
import Welcome from './Pages/Welcome.js';
import AboutMe from './Pages/AboutMe.js';
import ContactMe from './Pages/ContactMe.js';
import Projects from './Pages/Projects.js';

class App extends Component {
  constructor(){
    super();
    this.state={
      page: "Welcome",
      count: 1,
      backColor: '#E25D4C',
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
      return(<Projects/>)
    }

    else if (this.state.page === "ContactMe"){
      console.log(this.state.count);
      return(<ContactMe/>)

    }
  }

  changeColor1(){
    this.setState({count: this.state.count + 1});
    this.setState({page: "AboutMe"});
    if(this.state.count % 5 === 0){
      this.setState({backColor: '#E25D4C'})
    }
    if(this.state.count % 5 === 1){
      this.setState({backColor: '#ECBC49'})
    }
    if(this.state.count % 5 === 2){
      this.setState({backColor: '#94D55F'})
    }
    if(this.state.count % 5 === 3){
      this.setState({backColor: '#62ECDE'})
    }
    if(this.state.count % 5 === 4){
      this.setState({backColor: '#7267E2'})
    }
  }
  changeColor2(){
    this.setState({count: this.state.count + 1});
    this.setState({page: "Projects"});
    if(this.state.count % 5 === 0){
      this.setState({backColor: '#E25D4C'})
    }
    if(this.state.count % 5 === 1){
      this.setState({backColor: '#ECBC49'})
    }
    if(this.state.count % 5 === 2){
      this.setState({backColor: '#94D55F'})
    }
    if(this.state.count % 5 === 3){
      this.setState({backColor: '#62ECDE'})
    }
    if(this.state.count % 5 === 4){
      this.setState({backColor: '#7267E2'})
    }
  }
  changeColor3(){
    this.setState({count: this.state.count + 1});
    this.setState({page: "ContactMe"});
    if(this.state.count % 5 === 0){
      this.setState({backColor: '#E25D4C'})
    }
    if(this.state.count % 5 === 1){
      this.setState({backColor: '#ECBC49'})
    }
    if(this.state.count % 5 === 2){
      this.setState({backColor: '#94D55F'})
    }
    if(this.state.count % 5 === 3){
      this.setState({backColor: '#62ECDE'})
    }
    if(this.state.count % 5 === 4){
      this.setState({backColor: '#7267E2'})
    }
  }

  render() {

    return (
      <div className = "Page" style = {{backgroundColor: this.state.backColor}}>
        <div className = "Header">
          <div className = "Name"> Alay Deliwala </div>
        </div>
          {this.renderPage()}
        <div className="button">
            <button className="button" style = {{backgroundColor: this.state.backColor}} onClick={this.changeColor1.bind(this)}>
              <div className="aboutMe">
                  <h1>About Me </h1>
              </div>
          </button>
            <button className="button" style = {{backgroundColor: this.state.backColor}} onClick={this.changeColor2.bind(this)}  >
              <div className="contactMe">
                  <h1> Projects </h1>
              </div>
            </button>
            <button className="button" style = {{backgroundColor: this.state.backColor}} onClick= {this.changeColor3.bind(this)}>
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
