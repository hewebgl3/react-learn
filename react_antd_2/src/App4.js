import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {InputNumber,Icon} from 'antd'

class App4 extends Component {

  constructor(props){
    super(props)

  }

  onChange(value){
    console.log(value)
  }

  render() {
  
    return (
      <div>
        <InputNumber step={0.3}
          formatter={value=>`$${value}`}
          parser={value=>value.replace("$","")}
          onChange={this.onChange}
        ></InputNumber>
      </div>
    );
  }
}

export default App4;
