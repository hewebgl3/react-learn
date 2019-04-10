import React, { Component } from 'react';

class Component3 extends React.Component {
    constructor(props) {
        super(props);

        // 设置 initial state
        this.state = {
            text: props.initialValue || 'placeholder'
        };

        // ES6 类中函数必须手动绑定
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <div>
                录入的内容:{this.state.text}
                <br />
                <input onChange={this.handleChange}
               value={this.state.text} />

            </div>
        );
    }
}

export default Component3
