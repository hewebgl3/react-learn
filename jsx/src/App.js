import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Component1 from './Component1';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';
import Component6 from './Component6';
import Component7 from './Component7';
import Component8 from './Component8';
import Component9 from './Component9';
import Component10 from './Component10';
import Component11 from './Component11'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Component1 name="react" />
        <hr/>
        <Component3 />
        <hr/>
        <Component4 />
        <hr/>
        <Component5 v1="字"/>
        <hr/>
        <Component6 v1="字"/>
        <hr/>
        <Component7 />
        <hr/>
        <Component8 />
        <hr/>
        <Component9/>
        <Component11/>
      
      </div>
    );
  }
}

export default App;
