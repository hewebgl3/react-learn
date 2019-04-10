import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from "./CounterComponent/Store"
import {xxx} from "./reducerTest"
import CounterComponent from "./CounterComponent/CounterComponent";
import Provider from "./CounterComponent/Provider"

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <CounterComponent/>
      </Provider>
    );
  }
}

export default App;
