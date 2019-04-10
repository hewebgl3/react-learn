import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Input,Icon} from 'antd'

const Search = Input.Search
const TextArea = Input.TextArea

class App3 extends Component {

  constructor(props){
    super(props)
    this.onChangeUserName = this.onChangeUserName.bind(this)
    this.empty = this.empty.bind(this)
    this.state={
      userName:""
    }
  }

  search(value,event){
    console.log(value)
    console.log(event)
  }

  onChangeUserName(e){
    // 
    this.setState({
      userName:e.target.value
    })
  }

  empty(){
    this.userNameInput.focus()
  
    this.setState({
      userName:''
    })
  }

  render() {
    const {userName} = this.state;
    const suffix = userName?<Icon type="close-circle" onClick={this.empty}/>:null
    return (
      <div>
        <Input size="defalut" style={{width:200}}></Input>

        <Input size="defalut" style={{width:200}}
          addonBefore={(<Icon type="setting" />)}
        ></Input>

        <Search style={{width:200}} placeholder="请输入搜索的内容"
        onSearch={this.search}
        enterButton="Go"
        >

        </Search>

        <TextArea autosize
          placeholder="这是一个多行的文本"
          style={{width:200}}
        >
          jxkjdkfjd fjdk 
          sdfj dskfjdkfjdk
          dkfjdkfj d
          jxkjdkfjd fjdk 
          sdfj dskfjdkfjdk
          dkfjdkfj d
          jxkjdkfjd fjdk 
          sdfj dskfjdkfjdk
          dkfjdkfj d

        </TextArea>

        <Input
          prefix={<Icon type="user"/>}
          suffix={suffix}
          style={{width:200}}
          placeholder="请输入用户名"
          value={userName}
          onChange={this.onChangeUserName}
          ref={node=>this.userNameInput=node}
        ></Input>

        <Input  style={{width:200}}
         prefix={<Icon type="user"/>}
          allowClear
        ></Input>

        <Input.Password />
      </div>
    );
  }
}

export default App3;
