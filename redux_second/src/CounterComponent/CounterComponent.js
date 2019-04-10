
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

   
    }


    onClickButton() {
       this.props.onIncrement(2)
    }
   
    render (){
        return (
            <div>
            <button onClick={this.onClickButton}>+
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
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterComponent)

