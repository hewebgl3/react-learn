import React,{Component} from 'react'
/**
 * 第8课
 */
class ClickButton1 extends Component{

    onClickButton(){
        window.alert("这是第一个按钮组件")
    }

    render (){
        const buttonStyle={
            margin:16,
            backgroundColor:'#FF0000',
            color:"FFF",
            boderColor:"#096dd9",
            padding:'5px 15px'
        }
        
        return (
            <button style={buttonStyle} onClick={this.onClickButton}>
                click me
            </button>
        )
    }
}

export default ClickButton1
