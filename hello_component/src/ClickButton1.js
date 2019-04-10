import React,{Component} from 'react'
/**
 * 第8课
 */
class ClickButton1 extends Component{

    onClickButton(){
        window.alert("这是第一个按钮组件")
    }

    render (){
        return (
            <button onClick={this.onClickButton}>
                click me
            </button>
        )
    }
}

export default ClickButton1
