import React,{Component} from 'react'

class ChildComponent extends Component{

    constructor(props){
        super(props)
        //
        console.log("getDefalutProps")
        console.log("getInitialState")
        this.state ={
            date:new Date()
        }
        console.log(this.state.date)
    }

    getDefaultProps(){
        console.log("getDefalutProps")
    }

    getInitialState(){
        console.log("getInitialState")
    }

    // 仅执行一次
    componentWillMount(){
        console.log("componentWillMount")
        this.timer = setInterval(()=>{
            this.setState({date:new Date()})
        },1000)
    }


    render(){
        console.log("render")
        return (<div>当前时间：
            {this.state.date.toLocaleTimeString()}
            </div>)
    }

    // 卸载时只执行一次
    componentDidMount(){
        console.log("componentDidMount")
        //clearInterval( this.timer)
    }

    // 
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps")
    }

    shouldComponentUpdate(nextProps,nextStates){
        console.log("shouldComponentUpdate-1")
        return true;
    }

    componentWillUpdate(){
        console.log("componentWillUnmount-2")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate-3")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
        clearInterval( this.timer)
    }

}

export default ChildComponent