import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Select} from 'antd'

const Option = Select.Option
const OptGroup = Select.OptGroup

const provinceData =["浙江","江苏"]
const cityData = {"浙江":["杭州","宁波","温州"],
                 "江苏":["南宁","苏州","镇江"]}
class App8 extends Component {

  constructor(props){
    super(props)
    this.handleProvinceChange = this.handleProvinceChange.bind(this)
    this.state ={
      cities:cityData[provinceData[0]]

    }

  }

  handleProvinceChange(value){
    this.setState({
      cities:cityData[value]
    })
  }
 

  render() {
    const {cities} = this.state;
    return (
      <div>
        <Select style={{width:200}}>
          <Option key="0">男生</Option>
          <Option key="1" disabled>美女</Option>
        </Select>

        <Select style={{width:200}}
          showSearch
          optionFilterProp ="children"
          filterOption ={(input,option)=>{
              console.log(input)
              console.log(option)
              return option.props.children.indexOf(input) >=0
          }
          }
        >
          <Option key="0">男生</Option>
          <Option key="1">美女</Option>
        </Select>

        <Select style={{width:200}} mode="tags">
          <Option key="0">男生</Option>
          <Option key="1">美女</Option>
        </Select>

        <Select style={{width:200}} mode="tags">
          <OptGroup label="性别">
            <Option key="0">男生</Option>
            <Option key="1">美女</Option>
          </OptGroup>
          <OptGroup label="年龄">
            <Option key="2">10</Option>
            <Option key="3">20</Option>
          </OptGroup>
        </Select>

        <br/>
        <Select style={{width:200}}
          defaultValue={provinceData[0]}
          onChange ={this.handleProvinceChange}
        >
          {provinceData.map((provice)=><Option key={provice}>{provice}</Option>)}
        </Select>

        <Select style={{width:200}}>
          {cities.map((city)=><Option key={city}>{city}</Option>)}
        </Select>

      </div>
    );
  }
}

export default App8;
