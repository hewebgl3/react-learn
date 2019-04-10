import React,{Component} from "react"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAd,faAddressBook} from "@fortawesome/free-solid-svg-icons"

export const Icon = ()=>(
    <div>
        图标：
        <FontAwesomeIcon icon={faAd} color="#F00"/>
        <FontAwesomeIcon icon={faAddressBook}  />
    </div>
)
