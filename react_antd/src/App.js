import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from "./MyButton"
import MyButton2 from "./MyButton2"
import MyButton3 from "./MyButton3"
import MyIcon from "./MyIcon"

class App extends Component {
  render() {
    return (
      <div className="App">
       <MyButton />
       <br/>
       <MyButton2/>
       <br/>
       <MyButton3/>
       <br/>
       <MyIcon/>
      </div>
    );
  }
}

export default App;
