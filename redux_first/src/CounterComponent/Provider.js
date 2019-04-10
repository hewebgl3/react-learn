import React,{Component} from 'react'
import * as PropTypes from 'prop-types';

class Provider extends Component{
    getChildContext(){
        return {
            store:this.props.store
        }
    }

    render(){
        return this.props.children
    }
}

Provider.childContextTypes = {
    store:PropTypes.object
}

export default Provider

{/* <Provider store={store}>
    <xx/>
    <yy/>
</Provider> */}