
// view

import React,{Component} from 'react'
import * as Actions from "./Actions"
import * as PropTypes from 'prop-types';
/**
 */
class CounterComponent extends Component{

    constructor(props,context){
        super(props,context);
        this.onClickButton = this.onClickButton.bind(this);
        this.onChange = this.onChange.bind(this)

        this.state = {
            counter:this.context.store.getState()
        }
    }

    componentDidMount(){
        this.context.store.subscribe(this.onChange)
    }

    componentWillUnmount(){
       this.context.store.unsubscribe(this.onChange)
    }

    onChange(){
      this.setState({
          counter:this.context.store.getState()
      })
    }

    onClickButton() {
       this.context.store.dispatch(Actions.increment(2))
    }
   
    render (){
        return (
            <div>
            <button onClick={this.onClickButton}>+
            </button>
            <span>总数:{this.state.counter}</span>
            </div>

        )
    }
}

CounterComponent.contextTypes ={
    store:PropTypes.object
}

export default CounterComponent
