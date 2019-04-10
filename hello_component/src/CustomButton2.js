import React,{Component} from 'react'
import PropTypes from "prop-types"
/**
 */
class CustomButton2 extends Component{

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
                年龄：{this.props.age},
                性别：{this.props.sex},
                成绩：{this.props.grade}
            </button>
        )
    }
}

CustomButton2.propTypes = {
    text:PropTypes.string,
    age:PropTypes.number,
    sex:PropTypes.oneOf(["男","女"]),
    grade:PropTypes.oneOfType([PropTypes.string,PropTypes.number])
}


export default CustomButton2
