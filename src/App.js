import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           <h1 className = "App-title"> Welcome, {this.props.name}</h1>
          <p>
            Here's some cool stuff 
          </p>
          
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
