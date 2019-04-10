import React,{Component} from 'react'
import ChildComponent from "./ChildComponent"

class ContainerComponent extends Component{
    // 构造函数
    constructor(props){
        super(props)
        this.state = {
            isShow:true
        }
    }
    // willMount 设置定时器
    componentWillMount(){
        this.timer = setTimeout(()=>{
            //
            console.log("卸载定时器")
            this.setState({isShow:false})
        },5000);
    }
    // UnMount 清除定时器
    componentWillUnmount(){
        clearTimeout(this.timer)
    }

    render(){
        let child = null; //undefined
        if(this.state.isShow){
            child = <ChildComponent/>
        }
        return <div>
            {child}
        </div>
    }

}

export default ContainerComponent