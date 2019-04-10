import React, { Component } from 'react';
import {Button} from 'antd'

class MyButton extends Component{
    render(){
        return (
            <div>
                <Button type="default">default</Button>
                <Button type="primary">primary</Button>
                <Button type="ghost">ghost</Button>
                <Button type="dashed">dashed</Button>
                <Button type="danger">danger</Button>
            </div>

        )
        
        
    }
}

export default MyButton