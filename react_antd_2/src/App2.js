import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Row,Col} from 'antd'

class App2 extends Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={16} push={8}>1</Col>
          <Col span={8} pull={16}>2</Col>
        </Row>
        <Row>
          <Col span={8}>1</Col>
          <Col span={8}>2</Col>
          <Col span={8}>2</Col>
        </Row>
        <Row>
          <Col span={12}>1</Col>
          <Col span={12}>2</Col>
        </Row>
      </div>
    );
  }
}

export default App2;
