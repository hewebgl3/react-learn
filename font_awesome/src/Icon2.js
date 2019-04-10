import React,{Component} from "react"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAd,faAddressBook} from "@fortawesome/free-solid-svg-icons"

export const Icon2 = ()=>(
    <div>
        图标：
        <FontAwesomeIcon icon={faAd} color="blue"  rotation={90}/>
        <FontAwesomeIcon icon={faAddressBook} 
            transform={{rotate:45}}/>
    </div>
)
