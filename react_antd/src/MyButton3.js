import React, { Component } from 'react';
import {Button} from 'antd'
const ButtonGroup = Button.Group;

class MyButton3 extends Component{
    render(){
        return (
            <div>
                <Button type="default" loading>default</Button>
                <Button type="default" loading={false} disabled >default</Button>
                <br/>
                <ButtonGroup>
                    <Button type="default" loading>default</Button>
                    <Button type="default" loading={false} disabled >default</Button>
                </ButtonGroup>
                <br/>
                <ButtonGroup>
                    <Button type="default">&lt;</Button>
                    <Button type="default">1</Button>
                    <Button type="default">2</Button>
                    <Button type="default">3</Button>
                    <Button type="default">4</Button>
                    <Button type="default">5</Button>
                    <Button type="default">6</Button>
                    <Button type="default">&gt;</Button>
                </ButtonGroup>
            </div>

        )
        
        
    }
}

export default MyButton3