import React, { Component } from 'react';
import {Icon} from 'antd'
import logo from './logo.svg';

const HeartSvg = () => (
<svg width="640" height="480">
 <g>
  <title>Layer 1</title>
  <line id="svg_1" y2="78" x2="157" y1="75" x1="152" stroke-width="5" stroke="#000000" fill="none"/>
  <line id="svg_2" y2="114" x2="359" y1="113" x1="205" stroke-width="5" stroke="#000000" fill="none"/>
  <line id="svg_3" y2="270" x2="225" y1="167" x1="307" stroke-width="5" stroke="#000000" fill="none"/>
  <line id="svg_4" y2="159" x2="167" y1="248" x1="186" stroke-width="5" stroke="#000000" fill="none"/>
  <line id="svg_5" y2="307" x2="348" y1="111" x1="184" stroke-width="5" stroke="#000000" fill="none"/>
  <line id="svg_6" y2="301" x2="300" y1="323" x1="167" stroke-width="5" stroke="#000000" fill="none"/>
  <path id="svg_7" d="m485,143c27,4 116,50 59,89c-57,39 -48,36 -81,39c-33,3 -116,10 -92,-15c24,-25 57,-51 64,-66c7,-15 1,-20 0,-50c-1,-30 -1,-117 18,-77c19,40 32,80 32,80z" stroke-width="5" stroke="#000000" fill="none"/>
  <line id="svg_8" y2="257" x2="245" y1="170" x1="187" stroke-width="5" stroke="#000000" fill="none"/>
  <line id="svg_9" y2="228" x2="89" y1="183" x1="317" stroke-width="5" stroke="#000000" fill="none"/>
  <path id="svg_10" d="m354,295c-16,76 94,115 88,56c-6,-59 -13,-61 -23,-66c-10,-5 -42,-57 -52,-30c-10,27 -13,40 -13,40z" stroke-width="5" stroke="#000000" fill="none"/>
 </g>
</svg>
  );

  const HeartIcon = props => (
    <Icon component={HeartSvg} {...props} />
  );
  
  

class MyIcon extends Component{
    render(){
        return (
            <div>
                <Icon type="gold"/>
                <Icon type="calculator" theme="twoTone" />
                <Icon type="left-square" theme="filled"/>
                <Icon type="left-square" theme="outlined"/>
                <Icon type="left-square" theme="twoTone" spin />
                <HeartIcon/>
            </div>

        )
        
        
    }
}

export default MyIcon