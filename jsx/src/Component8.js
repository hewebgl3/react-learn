import React, { Component } from 'react';

class Component8 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var array = [
            "北京",
            "上海",
            "广州",
            "深圳"
        ];
 
        return (
            <ul>
               {array.map((i) => <li>{i}</li>)}
            </ul>
        );
    }
}

export default Component8
