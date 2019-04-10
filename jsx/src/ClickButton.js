import React, { Component } from 'react';

/**
 * 点击组件
 */
class ClickButton extends Component {

  constructor(props) {
    super(props)
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton() {
    window.alert("这是第一个组件")
  }

  render() {
    const counterStyle = {
      margin: '16px',
      // margin: 16, 
      backgroundColor:'#FF0000',
      color: '#fff',
      borderColor: '#096dd9',
      padding: '5 15px'
    }

    // 多行必须用括号括起来，单行不用
    return (
      <div>
        <button style={counterStyle} onClick={this.onClickButton}>Click Me</button>
      </div>
    );
  }
}

export default ClickButton;