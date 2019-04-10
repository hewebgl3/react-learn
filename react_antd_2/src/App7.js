import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Icon} from 'antd'

class App7 extends Component {

  constructor(props){
    super(props)

  }

  onChange(value){
    console.log(value)
  }


  render() {
  
    return (
      <div>
        <Switch defaultChecked onChange={this.onChange}
          checkedChildren="开" 
          unCheckedChildren="关"
        ></Switch>

        <Switch defaultChecked onChange={this.onChange}
          checkedChildren={<Icon type="check"/>}
          unCheckedChildren={<Icon type="close"/>}
        ></Switch>

        <Switch loading
        ></Switch>

      </div>
    );
  }
}

export default App7;
