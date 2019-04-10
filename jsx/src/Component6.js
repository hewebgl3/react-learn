import React, { Component } from 'react';

class Component6 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               每个属性中有一个空格<br/>
               {this.props.v1}{' '}{' '}{' '}{this.props.v1}{' '}{' '}{' '}{this.props.v1}
            </div>
        );
    }
}

export default Component6
