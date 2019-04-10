import React, { Component } from 'react';

class Component9 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var array = [
            <b>北京</b>,
            <b>上海</b>,
            <b>广州</b>,
            <b>深圳</b>
        ];
        
 
        return (
            <ul>
               {array.map(
                   function(i){
                       return <li>{i}</li>
                   }
               )}
            </ul>
        );
    }
}

export default Component9
