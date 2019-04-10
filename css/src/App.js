import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClickButton from "./ClickButton"
import ClickButton1 from "./ClickButton1"
import ClickButton2 from "./ClickButton2"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ClickButton />
          <ClickButton1></ClickButton1>
          <ClickButton2/>
        </header>
      </div>
    );
  }
}

export default App;
