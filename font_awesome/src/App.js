import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Icon} from "./Icon"
import {Icon2} from "./Icon2"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAd,faAddressBook,faAddressCard} from "@fortawesome/free-solid-svg-icons"
import {library} from "@fortawesome/fontawesome-svg-core"
import {fab} from "@fortawesome/free-brands-svg-icons"
import {Icon3} from "./Icon3"
library.add(fab,faAd,faAddressBook,faAddressCard)

class App extends Component {
  render() {
    return (
      <div className="App">
       <Icon />
       <hr/>
       <Icon2/>
       <FontAwesomeIcon icon={faAddressCard}/>
       <hr/>
       <Icon3 />
      </div>
    );
  }
}

export default App;
