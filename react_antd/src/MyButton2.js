import React, { Component } from 'react';
import {Button} from 'antd'

class MyButton2 extends Component{
    render(){
        return (
            <div>
                <Button type="default" size="large" icon="xxx">default</Button>
                <Button type="primary" size="small" icon="search">primary</Button>
                <Button type="ghost" size="default">ghost</Button>
                <Button type="dashed" size="" icon="search">dashed</Button>
                <Button type="danger" size="" icon="eye">danger</Button>
            </div>

        )
        
        
    }
}

export default MyButton2