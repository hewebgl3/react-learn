import React,{Component} from "react"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


export const Icon3 = ()=>(
    <div>
        图标：
        <FontAwesomeIcon icon="ad" color="blue"  rotation={90}/>
        <FontAwesomeIcon icon="address-book"
            transform={{rotate:45}}/>
        <FontAwesomeIcon icon={["fab","alipay"]}/>
        <FontAwesomeIcon icon={["fab","amazon"]}/>
        
    </div>
)
