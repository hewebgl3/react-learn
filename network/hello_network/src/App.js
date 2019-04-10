import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from "jquery"

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      city:"",
      temp:""
    }
  }

  componentDidMount(){
    $.get("/data/sk/101110102.html",
      function(result){
      console.log(result)
      console.log(typeof(result))
      result = JSON.parse(result)
      console.log(typeof(result))
      

      this.setState({
        city:result.weatherinfo.city,
        temp:result.weatherinfo.temp
      })
    }.bind(this))
  }

  render() {
    return (
      <div className="App">
       <div>城市：{this.state.city}</div>
       <div>天气：{this.state.temp}</div>
      </div>
    );
  }
}

export default App;
