
// view

import React,{Component} from 'react'
import * as Actions from "./Actions"
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux'
/**
 */
class CounterComponent extends Component{

    constructor(props,context){
        super(props,context);
        this.onClickButton = this.onClickButton.bind(this);
        this.onDecrement = this.onDecrement.bind(this)
        this.onClickOncrementDelay = 
                    this.onClickOncrementDelay.bind(this)

   
    }


    onClickButton() {
       this.props.onIncrement(2)
    }

    onDecrement(){
        this.props.onDecrement(2)
    }

    onClickOncrementDelay() {
        this.props.onIncrementDelay(5)
    }
   
    render (){
        return (
            <div>
            <button onClick={this.onClickButton}>+
            </button>
            <button onClick={this.onDecrement}>-
            </button>
            <button onClick={this.onClickOncrementDelay}>异步（延时）加速
            </button>
            <span>总数:{this.props.counter}</span>
            </div>

        )
    }
}

const mapStateToProps = (state) =>{
    return {
        counter:state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onIncrement:(counter) =>{
            dispatch(Actions.increment(counter))
        },
        onDecrement:(counter)=>{
            dispatch(Actions.decrement(counter))
        },
        onIncrementDelay:(second)=>{
            dispatch(Actions.onCrementDelay(second))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterComponent)

