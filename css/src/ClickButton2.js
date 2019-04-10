import React, { Component } from 'react';
import './ClickButton2.css'
/**
 * 点击组件
 */
class ClickButton2 extends Component {

  constructor(props) {
    super(props)
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton() {
    window.alert("这是第一个组件")
  }

  render() {
    // 多行必须用括号括起来，单行不用
    return (
      <div>
        <button  className="clickbutton" onClick={this.onClickButton}>Click Me</button>
      </div>
    );
  }
}

export default ClickButton2;