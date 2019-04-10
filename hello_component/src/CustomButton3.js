import React,{Component} from 'react'
import PropTypes from "prop-types"
/**
 */
class CustomButton3 extends Component{

    constructor(props){
        super(props);
    }

    onClickButton(){
        window.alert("这是第一个按钮组件")
    }

    render (){
        return (
            <button onClick={this.onClickButton}>
                姓名：{this.props.people.text},
                年龄：{this.props.people.age},
                性别：{this.props.people.sex},
                成绩：{this.props.people.grade}
            </button>
        )
    }
}

CustomButton3.propTypes = {
   people:PropTypes.shape({
        text:PropTypes.string,
        age:PropTypes.number,
        sex:PropTypes.oneOf(["男","女"]),
        grade:PropTypes.oneOfType([PropTypes.string,PropTypes.number])
   })
}


export default CustomButton3
