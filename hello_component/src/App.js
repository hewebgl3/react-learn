import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClickButton from "./ClickButton"
import ClickButton1 from "./ClickButton1"
import CustomButton from "./CustomButton"
import CounterComponent from "./CounterComponent"
import CustomButton2 from "./CustomButton2"
import CustomButton3 from "./CustomButton3"
import CustomButton4 from "./CustomButton4"

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
          <CustomButton text="这是我的一个按钮"/>
          <CustomButton text="3333"/>
          <CounterComponent/>
          <CustomButton2 text="小强" age={15} sex="女" grade={12}/>

          <CustomButton3 people={{text:"小强",age:15,sex:"女",grade:12}}/>
          <CustomButton4 text="12456" />
        </header>
      </div>
    );
  }
}

export default App;
