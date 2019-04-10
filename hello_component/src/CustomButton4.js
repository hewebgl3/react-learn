import React,{Component} from 'react'
import PropTypes from "prop-types"
/**
 */
class CustomButton4 extends Component{

    constructor(props){
        super(props);
    }

    onClickButton(){
        window.alert("这是第一个按钮组件")
    }

    render (){
        return (
            <button onClick={this.onClickButton}>
                姓名：{this.props.text},
              
            </button>
        )
    }
}

CustomButton4.propTypes = {
  text:(props,propName)=>{
    console.log(props,propName)
    console.log(typeof props[propName])
    console.log(props[propName].length)
    if(typeof props[propName] !== 'string'){
        return new Error("必须传递一个字符串进来")
    }else if(! (props[propName].length >=6)){
        return new Error("必须大于等于6个字符")
    }else{
        return null
    }
  }
}


export default CustomButton4
