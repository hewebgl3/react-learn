
// view

import React,{Component} from 'react'
import * as Actions from "./Actions"
import CounterStore from "./CounterStore"
/**
 */
class CounterComponent extends Component{

    constructor(props){
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        this.onChange = this.onChange.bind(this)

        this.state = {
            count:0
        }
    }

    componentDidMount(){
        CounterStore.addChangeListener(this.onChange)
    }

    componentWillUnmount(){
        CounterStore.removeChangeListener(this.onChange)
    }

    onChange(){
        // console.log("xxxx")
        console.log(this)
        const newCount = CounterStore.getCounterValues()["counter"] + 1;
        this.setState({
            count:newCount
        })
    }

    onClickButton() {
        Actions.increment(2)
    }
   
    render (){
        return (
            <div>
            <button onClick={this.onClickButton}>+
            </button>
            <span>总数:{this.state.count}</span>
            </div>

        )
    }
}

export default CounterComponent
