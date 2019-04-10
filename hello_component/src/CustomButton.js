import React,{Component} from 'react'
/**
 */
class CustomButton extends Component{

    constructor(props){
        super(props);
    }

    onClickButton(){
        window.alert("这是第一个按钮组件")
    }

    render (){
        return (
            <button onClick={this.onClickButton}>
                {this.props.text}
            </button>
        )
    }
}

export default CustomButton
