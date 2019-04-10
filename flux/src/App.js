import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterComponent from "./CounterComponent/CounterComponent"

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterComponent/>
      </div>
    );
  }
}

export default App;
