import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Checkbox} from 'antd'

const CheckboxGroup = Checkbox.Group;
const fruitOption = ["苹果","樱桃","火龙果","蜜桃"]
class App5 extends Component {

  constructor(props){
    super(props)

  }


  render() {
  
    return (
      <div>
        <CheckboxGroup options={fruitOption} defaultValue={["苹果","火龙果"]}>

        </CheckboxGroup>
      </div>
    );
  }
}

export default App5;
